package application

import (
	"fmt"
	"net/http"
)

func Home(app *Application) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		app.Info(app.storage.DB("user").Get())
	}
}
func Auth(app *Application) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Страница авторизации")
	}
}
func Store(app *Application) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Магазин")
	}
}
func FriendList(app *Application) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Список друзей")
	}
}
func Chat(app *Application) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Чат")
	}
}

func Tasks(app *Application) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Задания")
	}
}