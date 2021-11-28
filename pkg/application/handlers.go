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
	app.Info("Объект базы данных: ", app.Storage)
	app.Info("Пользовательский репозиторий: ", app.Storage.DB("user"), "\n\n\n")
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		app.Info(fmt.Sprintf("Request:\n%v\n", r))

		r.ParseForm()
		_new := r.Form.Get("new")
		if _new == "true" {
			email := r.Form.Get("email")
			if _, err := app.Storage.DB("user").Get(email); err == nil {
				rsp := responses.ErrorResponse("На данную почту уже имеется зарегистрированный аккаунт")
				app.Info("\n", rsp, "\n")
				fmt.Fprintf(w, rsp)
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
					rsp := responses.ErrorResponse("Техническая ошибка. Пожалуйста, попробуйте через пару минут")
					app.Info("\n", rsp, "\n")
					fmt.Fprintf(w, rsp)
					return
				}

				rsp := responses.UserResponse(user)
				app.Info("\n", rsp, "\n")
				fmt.Fprintf(w, rsp)
			} else {
				rsp := responses.ErrorResponse("Пароли не совпадают")
				app.Info("\n", rsp, "\n")
				fmt.Fprintf(w, rsp)
			}
		} else if _new == "false" {
			email := r.Form.Get("email")
			password := r.Form.Get("password")
			user, ok, err := proto.ValidateUser(app.Storage, email, password)
			if ok {
				rsp := responses.UserResponse(user)
				app.Info("\n", rsp, "\n")
				fmt.Fprintf(w, rsp)
			} else if !ok || err != nil {
				rsp := responses.ErrorResponse("Неверный логин или пароль")
				app.Info("\n", rsp, "\n")
				fmt.Fprintf(w, rsp)
			} else {
				rsp := responses.ErrorResponse("Техническая ошибка. Пожалуйста, попробуйте через пару минут")
				app.Info("\n", rsp, "\n")
				fmt.Fprintf(w, rsp)
			}
		}
	}
}
