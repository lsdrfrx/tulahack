package application

import (
	"net/http"
)

func (app *Application) configureRouter() {
	router := http.NewServeMux()

	fileServer := http.FileServer(http.Dir("./static"))

	router.HandleFunc("", Home(app))
	router.HandleFunc("/chat", Chat(app))
	router.HandleFunc("/auth", Auth(app))
	router.HandleFunc("/tasks", Tasks(app))
	router.HandleFunc("/store", Store(app))
	router.HandleFunc("/friends", FriendList(app))

	router.Handle("/static", http.StripPrefix("/static/", fileServer))

	app.router = router
}
