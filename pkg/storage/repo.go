package storage

type Repo interface {
	Get() interface{}
	Create()
	Delete()
	Modify()
}
