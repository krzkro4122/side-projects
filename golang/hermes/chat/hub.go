package chat

import (
	"log"

	"github.com/google/uuid"
)

type Hub struct {
	id         uuid.UUID
	clients    map[*Client]bool
	broadcast  chan []byte
	register   chan *Client
	unregister chan *Client
}

func NewHub() *Hub {
	uuid := uuid.New()
	log.Printf("[Hub@%v] 👶 New hub", uuid)
	return &Hub{
		id:         uuid,
		clients:    map[*Client]bool{},
		broadcast:  make(chan []byte),
		register:   make(chan *Client),
		unregister: make(chan *Client),
	}
}

func (hub *Hub) Run() {
	for {
		select {

		case client := <-hub.register:
			hub.clients[client] = true
			log.Printf("[Hub@%v] ✅ Connected client: %v", hub.id, client.id)

		case client := <-hub.unregister:
			if _, ok := hub.clients[client]; ok {
				delete(hub.clients, client)
				close(client.send)
				log.Printf("[Hub@%v] ⛔ Disconnected client:%v", hub.id, client.id)
			}

		case message := <-hub.broadcast:
			log.Printf("[Hub@%v] 🛜 Broadcasting: '%s'", hub.id, message)
			for client := range hub.clients {
				select {
				case client.send <- message:
				default:
					close(client.send)
					delete(hub.clients, client)
				}
			}
		}
	}
}
