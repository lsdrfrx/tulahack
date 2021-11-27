package storage

import (
	"awesomeProject/pkg/storage/repos"
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

type Storage struct {
	Db           *sql.DB
	Config       *Config

	userrepo     Repo
	taskrepo     Repo
	schedulerepo Repo
}

func NewStorage() *Storage {
	return &Storage{
		Config: NewConfig(),

		userrepo: repos.NewUserRepo(),
		taskrepo: repos.NewTaskRepo(),
		schedulerepo: repos.NewScheduleRepo(),
	}
}

func (s *Storage) Open() error {
	url := fmt.Sprintf(
		"postgres://%s:%s@localhost/%s",
		s.Config.user,
		s.Config.password,
		s.Config.dbname,
	)

	db, err := sql.Open("postgres", url)
	if err != nil {
		return err
	}

	err = db.Ping()
	if err != nil {
		return err
	}

	s.Db = db
	return nil
}

func (s *Storage) Close() error {
	err := s.Db.Close()
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
