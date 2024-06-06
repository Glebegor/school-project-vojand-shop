package main

import (
	"anderleshop/api/controllers"
	"anderleshop/bootstrap"
	"github.com/gin-gonic/gin"
	"time"
)

func main() {
	app := bootstrap.App()
	config := app.Config
	db := app.DB
	gin := gin.Default()
	timeout := 10 * time.Second
	//
	controllers.SetupController(config, gin, db, timeout)

	gin.Run(":" + config.ServerPORT)
	return
}
