package application

type Config struct {
	Addr string
}

func NewConfig() *Config {
	return &Config{
		Addr: "25.87.1.46:5000",
	}
}
