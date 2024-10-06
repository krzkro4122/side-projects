package router

import (
	"github.com/krzkro4122/hermes/chat"
	"github.com/krzkro4122/hermes/controller"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func define_endpoints(e *echo.Echo) {
	// Index
	e.Static("/assets", "./public/assets")
	e.GET("/", controller.Index)

	// Authentication
	e.POST("/login", controller.Login)
	e.POST("/register", controller.Register)

	// Websocket
	var hub = chat.NewHub()
	go hub.Run()
	e.GET("/ws", func(c echo.Context) error {
		return controller.Chat(hub, c)
	})
}

func apply_middleware(e *echo.Echo) {
	// e.Use(middleware.Logger())
	e.Use(middleware.Recover())
}

func Serve(address string) {
	e := echo.New()
	apply_middleware(e)
	define_endpoints(e)
	e.Logger.Fatal(e.Start(address))
}
