package controller

import (
	"fmt"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
)

var upgrader = websocket.Upgrader{}

func Chat(c echo.Context) error {
	ws, err := upgrader.Upgrade(c.Response(), c.Request(), nil)
	if err != nil {
		return err
	}
	defer ws.Close()

	var incoming, outgoing struct {
		message string
	}

	for {
		// Read
		err := ws.ReadJSON(&incoming)
		if err != nil {
			c.Logger().Error(err)
		}
		fmt.Printf("%v\n", incoming)

		// Write
		outgoing.message = fmt.Sprintf(
			"[SERVER] Hello, Client!, you said: %v\n",
			incoming.message,
		)
		err = ws.WriteJSON(&outgoing)
		if err != nil {
			c.Logger().Error(err)
		}
	}
}
