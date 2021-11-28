package proto

import (
	"awesomeProject/pkg/models"
	"awesomeProject/pkg/storage"
)

func ValidateUser(s *storage.Storage, email, password string) (models.User, bool, error) {
	user, err := s.DB("user").Get(email)
	if err != nil {
		return models.User{}, false, err
	}

	if user.(models.User).EncPassword == password {
		return user.(models.User), true, nil
	}
	return models.User{}, false, nil
}

func RegistrateUser(s *storage.Storage, user models.User) error {
	err := s.DB("user").Create(user)
	if err != nil {
		return err
	}
	return nil
}