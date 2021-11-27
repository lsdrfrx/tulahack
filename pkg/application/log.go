package application

import (
	"log"
	"os"
)

func (app *Application) configureLogger() {
	infolog := log.New(os.Stdout, "[INFO]\t", log.Ldate|log.Ltime)
	errolog := log.New(os.Stderr, "[ERRO]\t", log.Ldate|log.Ltime|log.Lshortfile)

	app.infolog = infolog
	app.errolog = errolog
}
