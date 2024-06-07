package bootstrap

import (
	"github.com/joho/godotenv"
	"github.com/spf13/viper"
	"os"
)

type Config struct {
	ServerPORT   string
	ServerHOST   string
	ServerSECRET string

	DbHOST string
	DbPORT string
	DbUSER string
	DbPASS string
	DbNAME string
}

func NewConfig() (*Config, error) {
	config := Config{}
	viper.SetConfigName("config")
	viper.AddConfigPath("config")

	if err := viper.ReadInConfig(); err != nil {
		return &config, err
	}

	if err := godotenv.Load(); err != nil {
		return &config, err
	}
	config = Config{
		ServerPORT:   viper.GetString("server.port"),
		ServerHOST:   viper.GetString("server.host"),
		ServerSECRET: os.Getenv("SECRET"),
		DbHOST:       viper.GetString("db.host"),
		DbPORT:       viper.GetString("db.port"),
		DbUSER:       viper.GetString("db.user"),
		DbPASS:       os.Getenv("DB_PASSWORD"),
		DbNAME:       viper.GetString("db.name"),
	}

	return &config, nil
}
