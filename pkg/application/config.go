package application

type Config struct {
	Addr string
}

func NewConfig() *Config {
	return &Config{
		Addr: ":5000",
	}
}
