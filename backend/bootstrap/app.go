package bootstrap

import (
	"github.com/jmoiron/sqlx"
	"log"
)

type Application struct {
	Config *Config
	DB     *sqlx.DB
}

func App() Application {
	app := &Application{}
	config, err := NewConfig()
	if err != nil {
		log.Fatalln(err)
	}
	app.Config = config
	db, err := NewPostgresConnection(config)
	if err != nil {
		log.Fatalln(err)
	}
	app.DB = db
	return *app
}
