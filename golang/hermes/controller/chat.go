package controller

import (
	"log"

	"github.com/krzkro4122/hermes/chat"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func Chat(hub *chat.Hub, c echo.Context) error {
	connection, err := upgrader.Upgrade(c.Response(), c.Request(), nil)

	if err != nil {
		log.Println(err)
		return err
	}

	client := chat.NewClient(hub, connection)
	client.Register()

	go client.WriteFromHub()
	go client.ReadToHub()

	log.Printf("Gotit")
	return nil
}
