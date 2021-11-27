package repos

import (
	"awesomeProject/pkg/models"
	"database/sql"
	"fmt"
)

type UserRepo struct {
	db *sql.DB
}

func NewUserRepo(db *sql.DB) *UserRepo {
	return &UserRepo{
		db: db,
	}
}

func (r *UserRepo) Get(userid int) (interface{}, error) {
	var user models.User
	query := fmt.Sprintf("SELECT * FROM users WHERE userid=%v", userid)

	row := r.db.QueryRow(query)
	err := row.Scan(
		&user.Id, &user.Name, &user.Surname,
		&user.Age, &user.Email, &user.EncPassword,
		&user.RefreshToken, &user.Avatar, &user.Class,
		&user.School, &user.UserId,
	)

	if err != nil {
		return nil, err
	}

	return user, nil
}

func (r *UserRepo) Create(user interface{}) error {
	u := user.(models.User)

	query := fmt.Sprint(
		"INSERT INTO users (id, name, surname, " +
			"age, email, enc_password, " +
			"refresh_token, avatar, class, " +
			"school, userid) VALUES (" +
			"$1, $2, $3, " +
			"$4, $5, $6, " +
			"$7, $8, $9, " +
			"$10, $11)",
	)

	_, err := r.db.Exec(
		query,
		u.Id, u.Name, u.Surname,
		u.Age, u.Email, u.EncPassword,
		u.RefreshToken, u.Avatar, u.Class,
		u.School, u.UserId,
	)
	if err != nil {
		return err
	}

	return nil
}

func (r *UserRepo) Delete(id int) error {
	query := fmt.Sprintf("DELETE FROM users WHERE id=%v", id)

	_, err := r.db.Exec(query)
	if err != nil {
		return err
	}
	return nil
}

func (r *UserRepo) Modify(id int, newUser interface{}) (interface{}, error) {
	n := newUser.(models.User)

	query := fmt.Sprintf(
		"UPDATE users " +
			"SET name = '%s', surname = '%s', " +
			"age = %v, email = '%s', enc_password = '%s', " +
			"refresh_token = '%s', avatar = '%s', class = '%s', " +
			"school = '%s', userid = %v WHERE id = %v;",
			n.Name, n.Surname, n.Age,
			n.Email, n.EncPassword, n.RefreshToken,
			n.Avatar, n.Class, n.School, n.UserId,
			id,
	)

	res, err := r.db.Exec(query)
	if err != nil {
		return nil, err
	}
	return res, nil
}