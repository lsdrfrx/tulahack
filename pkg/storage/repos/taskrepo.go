package repos

type TaskRepo struct {}

func NewTaskRepo() *TaskRepo {
	return &TaskRepo{}
}

func (r *TaskRepo) Get() interface{} {
	return nil
}

func (r *TaskRepo) Create() {}

func (r *TaskRepo) Delete() {}

func (r *TaskRepo) Modify() {}