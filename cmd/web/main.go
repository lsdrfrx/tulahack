package main

import (
	"awesomeProject/pkg/application"
	"net/http"
)

func main() {
	app := application.NewApplication()

	s := http.Server{
		Handler: app.GetRouter(),
		ErrorLog: app.GetErrorLogger(),
		Addr: app.Config.Addr,
	}

	app.Info("Server started on:", s.Addr)
	app.Panic(s.ListenAndServe())
}
