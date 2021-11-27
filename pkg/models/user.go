package models

type User struct {
	firstname   string
	lastname    string
	school      string
	age         int

	email       string
	password    string
	encPassword string
}
