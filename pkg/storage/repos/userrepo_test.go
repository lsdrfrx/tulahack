package repos_test

import (
	"awesomeProject/pkg/models"
	"awesomeProject/pkg/storage"
	"testing"
)

func TestCreate(t *testing.T) {
	s := storage.NewStorage()
	s.Trunc()

	user := models.NewUser(
		1, "Вася", "Пупкин",
		15, "Ауе", "123",
		"321", "аватар", "3",
		"школа", 123,
	)

	err := s.DB("user").Create(user)
	if err != nil {
		t.Fatal("Unable to create new row: ", err)
	}

	u, err := s.DB("user").Get("Ауе")
	if err != nil {
		t.Fatal("Unable to find user: ", err)
	}

	if u != user {
		t.Fatal("Users doesn't match: ", err)
	}
}

func TestDelete(t *testing.T) {
	s := storage.NewStorage()
	s.Trunc()

	user := models.NewUser(
		1, "Вася", "Пупкин",
		15, "Ауе", "123",
		"321", "аватар", "3",
		"школа", 123,
	)

	err := s.DB("user").Create(user)
	if err != nil {
		t.Fatal("Unable to create user: ", err)
	}

	err = s.DB("user").Delete(1)
	if err != nil {
		t.Fatal("Unable to delete user: ", err)
	}

	_, err = s.DB("user").Get(user.Email)
	if err == nil {
		t.Fatal("User is not deleted: ", err)
	}
}

func TestModify(t *testing.T) {
	s := storage.NewStorage()
	s.Trunc()

	user := models.NewUser(
		1, "Вася", "Пупкин",
		15, "Ауе", "123",
		"321", "аватар", "3",
		"школа", 123,
	)

	newu := models.NewUser(
		1, "Вас3", "Пупкин5",
		125, "Ау4е", "1323",
		"3321", "ава4тар", "13",
		"школ5а", 1232,
	)

	err := s.DB("user").Create(user)
	if err != nil {
		t.Fatal("Unable to create user: ", err)
	}

	_, err = s.DB("user").Modify(1, newu)
	if err != nil {
		t.Fatal("Unable to modify row: ", err)
	}
}