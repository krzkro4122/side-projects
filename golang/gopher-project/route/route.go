package route

import (
	"fmt"

	"github.com/krzkro4122/echogogorm/controller"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/echo/v4"
)

func define_endpoints(e *echo.Echo) {
	// Index
	e.Static("/assets", "./public/assets")
	e.GET("/", controller.Index)

	// Authentication
	e.POST("/login", controller.Login)
	// e.POST("/register", controller.Register)

	// Product
	// e.GET("/product/:id", controller.ReadProduct)
	// e.GET("/product", controller.ReadAllProducts)
	// e.PUT("/product/:id", controller.UpdateProduct)
	// e.POST("/product", controller.CreateProduct)
	// e.DELETE("/product/:id", controller.DeleteProduct)

	// Category
	// e.GET("/category/:id", controller.ReadCategory)
	// e.GET("/category", controller.ReadAllCategories)
	// e.PUT("/category/:id", controller.UpdateCategory)
	// e.POST("/category", controller.CreateCategory)
	// e.DELETE("/category/:id", controller.DeleteCategory)

	// Purchase
	// e.POST("/cart/buy", controller.BuyCart)
}

func Serve(address string) {
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))
	define_endpoints(e)
	e.Logger.Fatal(e.Start(fmt.Sprintf("%s", address)))
}

