package application

import (
	"net/http"
)

func (app *Application) configureRouter() {
	router := http.NewServeMux()

	router.HandleFunc("/auth", Auth(app))

	app.router = router
}
