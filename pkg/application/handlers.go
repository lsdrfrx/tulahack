package application

import (
	"awesomeProject/pkg/auth/proto"
	"awesomeProject/pkg/models"
	"awesomeProject/pkg/responses"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func Auth(app *Application) http.HandlerFunc {
	app.Info("Объект базы данных: ", app.Storage)
	app.Info("Пользовательский репозиторий: ", app.Storage.DB("user"), "\n\n\n")
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		buff, err := ioutil.ReadAll(r.Body)
		if err != nil {
			app.Error(err)
			return
		}

		app.Info(buff)

		reqdata := make(map[string]interface{})
		user := models.User{}
		err = json.Unmarshal(buff, &reqdata)
		if err != nil {
			app.Error(err)
			return
		}


		data, _ := json.Marshal(reqdata["user"].(map[string]interface{}))
		app.Info(reqdata)
		_ = json.Unmarshal(data, &user)

		_new := reqdata["new"]

		if _new == true {
			email := user.Email
			if _, err := app.Storage.DB("user").Get(email); err == nil {
				rsp := responses.ErrorResponse("На данную почту уже имеется зарегистрированный аккаунт")
				app.Info("\n", rsp, "\n")
				fmt.Fprintf(w, rsp)
				return
			}

			user.EncPassword = reqdata["user"].(map[string]interface{})["password"].(string)
			user.Age = reqdata["user"].(map[string]interface{})["age"].(int)

			err = proto.RegistrateUser(app.Storage, user)
			if err != nil {
				rsp := responses.ErrorResponse("Техническая ошибка. Пожалуйста, попробуйте через пару минут")
				app.Info("\n", rsp, "\n")
				fmt.Fprintf(w, rsp)
				return
			}

			rsp := responses.UserResponse(user)
			app.Info("\n", rsp, "\n")
			fmt.Fprintf(w, rsp)
		} else if _new == false {
			email := user.Email
			password := reqdata["user"].(map[string]interface{})["password"].(string)
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