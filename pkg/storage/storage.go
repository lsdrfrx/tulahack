package storage

import (
	"awesomeProject/pkg/storage/repos"
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

type Storage struct {
	db           *sql.DB
	Config       *Config

	userrepo     Repo
	taskrepo     Repo
	schedulerepo Repo
}

func NewStorage() *Storage {
	s := &Storage{
		Config: NewConfig(),
	}

	err := s.Open()
	if err != nil {
		return nil
	}

	s.userrepo = repos.NewUserRepo(s.db)
	//s.taskrepo = repos.NewTaskRepo(s.db)
	//s.schedulerepo = repos.NewScheduleRepo(s.db)

	return s
}

func (s *Storage) Open() error {
	url := fmt.Sprintf(
		"port=5432 host=25.87.1.46 user=%s password=%s dbname=%s sslmode=%s",
		s.Config.user,
		s.Config.password,
		s.Config.dbname,
		s.Config.sslmode,
	)

	db_, err := sql.Open("postgres", url)
	if err != nil {
		return err
	}

	err = db_.Ping()
	if err != nil {
		return err
	}

	s.db = db_
	return nil
}

func (s *Storage) Close() error {
	err := s.db.Close()
	if err != nil {
		return err
	}

	return nil
}

func (s *Storage) DB(repo string) Repo {
	switch repo {
	case "user":
		return s.userrepo
	case "task":
		return s.taskrepo
	case "schedule":
		return s.schedulerepo
	default:
		return nil
	}
}

func (s *Storage) Trunc() {
	query := "TRUNCATE TABLE users RESTART IDENTITY CASCADE"
	_, err := s.db.Exec(query)
	if err != nil {}
}