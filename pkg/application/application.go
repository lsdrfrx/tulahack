package application

import (
	"awesomeProject/pkg/storage"
	"log"
	"net/http"
)

type Application struct {
	infolog *log.Logger
	errolog *log.Logger
	router  *http.ServeMux
	Storage *storage.Storage

	Config  *Config
}

func NewApplication() *Application {
	app := &Application{
		Storage: storage.NewStorage(),
		Config: NewConfig(),
	}

	app.configureLogger()
	app.configureRouter()

	return app
}


func (app *Application) Info(content ...interface{}) {
	app.infolog.Println(content...)
}

func (app *Application) Error(content ...interface{}) {
	app.errolog.Println(content...)
}

func (app *Application) Panic(content ...interface{}) {
	app.errolog.Panic(content...)
}


func (app *Application) GetRouter() *http.ServeMux {
	return app.router
}

func (app *Application) GetErrorLogger() *log.Logger {
	return app.errolog
}

