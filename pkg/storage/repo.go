package storage

type Repo interface {
	Get(string) (interface{}, error)
	Create(interface{}) error
	Delete(int) error
	Modify(int, interface{}) (interface{}, error)
}
