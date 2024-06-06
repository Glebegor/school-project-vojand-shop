package main

import (
	"anderleshop/bootstrap"
	"github.com/gin-gonic/gin"
)

func main() {
	app := bootstrap.Application{}
	config := app.Config
	//db := app.DB
	gin := gin.Default()
	//timeout := 10 * time.Second

	gin.Run(":" + config.ServerPORT)
	return
}
