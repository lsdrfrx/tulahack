package models

type User struct {
	Id           int    `json:"id"`
	Name         string `json:"name"`
	Surname      string `json:"surname"`
	Age          int    `json:"age"`
	Email        string `json:"email"`
	EncPassword  string	`json:"-"`
	RefreshToken string `json:"-"`
	Avatar       string `json:"avatar"`
	Class        string `json:"class"`
	School       string `json:"school"`
	UserId       int    `json:"userid"`
}

func NewUser(name, surname string,
			 age int, email, encPassword,
			 refreshToken, avatar, class,
			 school string, userid int) User {
	return User{
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