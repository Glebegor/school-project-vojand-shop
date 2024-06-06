package bootstrap

import (
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func NewPostgresConnection(config *Config) (*sqlx.DB, error) {
	//db, err := sqlx.Connect()

}
