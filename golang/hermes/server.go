package main

import (
	"fmt"
	"os"

	"github.com/krzkro4122/hermes/router"
)

func get_env(name, defaultValue string) string {
	value, exists := os.LookupEnv(name)
	if exists {
		return value
	} else {
		return defaultValue
	}
}

func main() {
	host := get_env("BACKEND_HOST", "0.0.0.0")
	port := get_env("BACKEND_PORT", "9000")

	address := fmt.Sprintf("%s:%s", host, port)

	fmt.Printf("Running the server on: http://%s\n", address)
	router.Serve(address)
}
