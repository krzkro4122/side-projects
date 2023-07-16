package route

import (
	"fmt"
	"os"
	"os/signal"

	"github.com/krzkro4122/gopher/controller"
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
}

func Serve(address string) {
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))
	define_endpoints(e)
	e.Logger.Fatal(e.Start(fmt.Sprintf("%s", address)))
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		e.Close()
	}()
}

