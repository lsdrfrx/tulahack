package repos

import "database/sql"

type ScheduleRepo struct {
	db *sql.DB
}

func NewScheduleRepo(db *sql.DB) *ScheduleRepo {
	return &ScheduleRepo{
		db: db,
	}
}

func (r *ScheduleRepo) Get(userid int) interface{} {
	return nil
}

func (r *ScheduleRepo) Create() {}

func (r *ScheduleRepo) Delete() {}

func (r *ScheduleRepo) Modify() {}