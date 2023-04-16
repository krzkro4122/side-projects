package server

import (
	"fmt"
	"net/http"
)

func AttachHandler1() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to my website!\n")
		fmt.Fprintf(w, "This is a GOLANG server and it's doxing you: %s\n", r.Host)
		fmt.Fprintf(w, "Query: %+v\n", r.URL.Query())
		fmt.Fprintf(w, "Query param: %s\n", r.URL.Query().Get("query_param"))
		// Checked with f.e. http://localhost:8080/?query_param=lol
		// r.FormValue("email") <- Getting parameters from a POST request
		// (like fields from an HTML form)
	})
}
