package repos

import "database/sql"

type TaskRepo struct {
	db *sql.DB
}

func NewTaskRepo(db *sql.DB) *TaskRepo {
	return &TaskRepo{
		db: db,
	}
}

func (r *TaskRepo) Get(userid int) interface{} {
	return nil
}

func (r *TaskRepo) Create() {}

func (r *TaskRepo) Delete() {}

func (r *TaskRepo) Modify() {}