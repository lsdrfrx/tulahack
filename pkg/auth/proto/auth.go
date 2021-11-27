package proto

import (
	"awesomeProject/pkg/application"
	"awesomeProject/pkg/models"
)

func ValidateUser(app *application.Application, user models.User) (bool, error) {
	u, err := app.Storage.DB("user").Get(user.UserId)
	if err != nil {
		return false, err
	}

	if u != user {
		return false, nil
	}
	return true, nil
}