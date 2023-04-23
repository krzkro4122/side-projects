package server

import (
	"net/http"
)

func AttachHandler2() {
	fs := http.FileServer(http.Dir("server/static2/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
}
