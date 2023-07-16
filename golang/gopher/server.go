package main

import (
	"fmt"
	"os"

	"github.com/krzkro4122/gopher/route"
)

func get_env(env, def string) string {
	value, exists := os.LookupEnv(env)
	if exists {
		return value
	} else {
		return def
	}
}

func main() {
	host := get_env("BACKEND_HOST", "0.0.0.0")
	port := get_env("BACKEND_PORT", "9000")
	
	address := fmt.Sprintf("%s:%s", host, port)

	fmt.Printf("Running the server on: http://%s\n", address)
	route.Serve(address)
}

