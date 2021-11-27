package repos

type ScheduleRepo struct {}

func NewScheduleRepo() *ScheduleRepo {
	return &ScheduleRepo{}
}

func (r *ScheduleRepo) Get() interface{} {
	return nil
}

func (r *ScheduleRepo) Create() {}

func (r *ScheduleRepo) Delete() {}

func (r *ScheduleRepo) Modify() {}