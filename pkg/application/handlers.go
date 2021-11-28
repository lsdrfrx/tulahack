package application

import (
	"awesomeProject/pkg/auth/proto"
	"awesomeProject/pkg/models"
	"awesomeProject/pkg/responses"
	"fmt"
	"net/http"
	"strconv"
)

func Auth(app *Application) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "%v", r)

		r.ParseForm()
		_new := r.Form.Get("new")
		if _new == "true" {
			email := r.Form.Get("email")
			if _, err := app.Storage.DB("user").Get(email); err == nil {
				fmt.Fprintf(w, responses.ErrorResponse("На данную почту уже имеется зарегистрированный аккаунт"))
				return
			}

			name            := r.Form.Get("name")
			surname         := r.Form.Get("surname")
			age             := r.Form.Get("age")
			class           := r.Form.Get("class")
			school          := r.Form.Get("school")
			password        := r.Form.Get("password")
			confirmPassword := r.Form.Get("confirmPassword")

			if password == confirmPassword {
				a, _ := strconv.Atoi(age)
				user := models.NewUser(
					name, surname, a,
					email, password, "",
					"", class, school, 0,
				)
				err := proto.RegistrateUser(app.Storage, user)
				if err != nil {
					fmt.Fprintf(w, responses.ErrorResponse("Техническая ошибка. Пожалуйста, попробуйте через пару минут"))
					return
				}

				fmt.Fprintf(w, "Аккаунт создан")
			} else {
				fmt.Fprintf(w, responses.ErrorResponse("Пароли не совпадают"))
			}
		} else if _new == "false" {
			email := r.Form.Get("email")
			password := r.Form.Get("password")
			valid := proto.ValidateUser(app.Storage, email, password)
			if valid {
				fmt.Fprintf(w, "Аккаунт валиден")
			} else {
				fmt.Fprintf(w, responses.ErrorResponse("Неверный логин или пароль"))
			}
		}
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