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

	for {
		// Read
		_, msg, err := ws.ReadMessage()
		if err != nil {
			c.Logger().Error(err)
		}
		fmt.Printf("%s\n", msg)

		// Write
		err = ws.WriteMessage(
			websocket.TextMessage,
			[]byte(
				fmt.Sprintf(
					"[SERVER] Hello, Client!, you said: %s\n",
					msg,
				),
			),
		)
		if err != nil {
			c.Logger().Error(err)
		}
	}
}
