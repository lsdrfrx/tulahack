package repos

type UserRepo struct {

}

func NewUserRepo() *UserRepo {
	return &UserRepo{}
}

func (r *UserRepo) Get() interface{} {
	return nil
}

func (r *UserRepo) Create() {}

func (r *UserRepo) Delete() {}

func (r *UserRepo) Modify() {}