package storage

type Config struct {
	user     string
	password string
	dbname   string
	sslmode  string
}

func NewConfig() *Config {
	return &Config{
		user: "postgres",
		password: "Jopa1235",
		dbname: "test",
		sslmode: "disabled",
	}
}