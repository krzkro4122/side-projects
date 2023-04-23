package main

import (
	"learning/server"
	"net/http"
)

func main() {
	server.AttachHandler2()
	http.ListenAndServe(":8080", nil)
}
