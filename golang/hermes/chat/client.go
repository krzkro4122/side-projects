package chat

import (
	"bytes"
	"encoding/json"
	"log"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

const (
	writeWait      = 10 * time.Second
	pongWait       = 60 * time.Second
	pingPeriod     = (pongWait * 9) / 10
	maxMessageSize = 512
)

var (
	newline = []byte{'\n'}
	space   = []byte{' '}
)

type Payload struct {
	ClientId uuid.UUID
	Message  string
}

type HandshakePayload struct {
	ClientId uuid.UUID
	Message  string
}

type Client struct {
	id         uuid.UUID
	hub        *Hub
	connection *websocket.Conn
	send       chan []byte
	incoming   *Payload
	outgoing   *Payload
}

func (client *Client) Register() {
	client.hub.register <- client
	log.Printf("[Client@%v] ✅ Registered to hub: %v", client.id, client.hub.id)
}

func NewClient(hub *Hub, connection *websocket.Conn) *Client {
	uuid := uuid.New()
	log.Printf("[Client@%v] 👶 New client", uuid)
	client := &Client{
		id:         uuid,
		hub:        hub,
		connection: connection,
		send:       make(chan []byte, 256),
		incoming:   &Payload{ClientId: uuid},
		outgoing:   &Payload{ClientId: uuid},
	}
	return client
}

func (client *Client) ReadToHub() {
	defer func() {
		client.hub.unregister <- client
		client.connection.Close()
		log.Printf("[Client@%v] ⛔ Unregistered from hub: %v\n", client.id, client.hub.id)
	}()

	client.connection.SetReadLimit(maxMessageSize)
	client.connection.SetReadDeadline(time.Now().Add(pongWait))
	client.connection.SetPongHandler(func(string) error {
		client.connection.SetReadDeadline(time.Now().Add(pongWait))
		return nil
	})

	for {
		_, message, err := client.connection.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("[Client@%v] ReadMessage error: %v", client.id, err)
			}
		}
		log.Printf("[Client@%v] 📥 Got: %s", client.id, message)

		err = json.Unmarshal(message, client.incoming)
		if err != nil {
			log.Printf("[Client@%v] Unmarshal error: %v", client.id, err)
			continue
		}

		log.Printf("[Client@%v] 📥 Got: %s from %s", client.id, client.incoming.Message, client.incoming.ClientId)

		message = bytes.TrimSpace(bytes.Replace(message, newline, space, -1))
		client.hub.broadcast <- message
	}
}

func (client *Client) WriteFromHub() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		client.connection.Close()
	}()

	for {
		select {
		case message, ok := <-client.send:
			client.connection.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				// hub closed the channel
				client.connection.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := client.connection.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}
			log.Printf("[Client@%v] 📤 Sending: %s", client.id, message)
			w.Write(message)

			// Add queued chat messages to the current websocket message
			n := len(client.send)
			for i := 0; i < n; i++ {
				w.Write(newline)
				w.Write(<-client.send)
			}

			if err := w.Close(); err != nil {
				return
			}

		case <-ticker.C:
			client.connection.SetWriteDeadline(time.Now().Add(writeWait))
			if err := client.connection.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}
