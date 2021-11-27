package storage

type Repo interface {
	Get(int) (interface{}, error)
	Create(interface{}) error
	Delete(int) error
	Modify(int, interface{}) (interface{}, error)
}
