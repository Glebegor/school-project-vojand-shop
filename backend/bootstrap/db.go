package bootstrap

import (
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func NewPostgresConnection(config *Config) (*sqlx.DB, error) {
	connectString := "host=" + config.DbHOST + " port=" + config.DbPORT + " user=" + config.DbUSER + " password=" + config.DbPASS + " dbname=" + config.DbNAME + " sslmode=disable"
	db, err := sqlx.Connect("postgres", connectString)
	if err != nil {
		return nil, err
	}
	if err := db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}
