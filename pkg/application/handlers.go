package application

import (
	"awesomeProject/pkg/models"
	"awesomeProject/pkg/responses"
	"encoding/json"
	"fmt"
	"net/http"
)

//func Home(app *Application) http.HandlerFunc {
//	return func(w http.ResponseWriter, r *http.Request) {
//		app.Info(app.Storage.DB("user").Get())
//	}
//}

func Auth(app *Application) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		err := r.ParseForm()
		if err != nil {
			fmt.Fprintf(w, err.Error())
			return
		}

		email := r.Form.Get("email")
		password := r.Form.Get("password")

		resp := make(map[string]interface{})

		user, err := app.Storage.DB("user").Get(email)
		if err != nil {
			resp["error"] = "Пользователя с данным логином не существует"
			data, _ := json.Marshal(resp)

			fmt.Fprintf(w, string(data))
			return
		}


		if password == user.(models.User).EncPassword {
			data := user.(models.User)
			resp := responses.AuthResponse{
				Info: data,
			}

			r_, _ := json.Marshal(resp)
			fmt.Fprintf(w, string(r_))
			return

		} else {
			resp["error"] = "Неверный пароль"
			data, _ := json.Marshal(resp)
			fmt.Fprintf(w, string(data))
		}

		app.Info(user)
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