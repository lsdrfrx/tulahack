package models

type User struct {
	Id           int
	Name         string
	Surname      string
	Age          int
	Email        string
	EncPassword  string
	RefreshToken string
	Avatar       string
	Class        string
	School       string
	UserId       int
}

func NewUser(id int, name, surname string,
			 age int, email, encPassword,
			 refreshToken, avatar, class,
			 school string, userid int) User {
	return User{
		Id: id,
		Name: name,
		Surname: surname,
		Age: age,
		Email: email,
		EncPassword: encPassword,
		RefreshToken: refreshToken,
		Avatar: avatar,
		Class: class,
		School: school,
		UserId: userid,
	}
}