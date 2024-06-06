package main

import (
	"anderleshop/bootstrap"
	"anderleshop/controllers"
	"github.com/gin-gonic/gin"
	"time"
)

func main() {
	app := bootstrap.Application{}
	config := app.Config
	db := app.DB
	gin := gin.Default()
	timeout := 10 * time.Second

	controllers.SetupController(config, gin, db, timeout)
	gin.Run(":" + config.ServerPORT)
	return
}
