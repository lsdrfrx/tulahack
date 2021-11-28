package proto

import (
	"awesomeProject/pkg/models"
	"awesomeProject/pkg/storage"
)

func ValidateUser(s *storage.Storage, email, password string) bool {
	user, err := s.DB("user").Get(email)
	if err != nil {
		return false
	}

	if user.(models.User).EncPassword == password {
		return true
	}
	return false
}

func RegistrateUser(s *storage.Storage, user models.User) error {
	err := s.DB("user").Create(user)
	if err != nil {
		return err
	}
	return nil
}