package bootstrap

type Config struct {
	serverPORT   string
	serverHOST   string
	serverSECRET string

	dbHOST string
	dbPORT string
	dbUSER string
	dbPASS string
	dbNAME string
}

func NewConfig() *Config {

}
