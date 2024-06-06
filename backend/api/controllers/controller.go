package controllers

import (
	"anderleshop/bootstrap"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"time"
)

func SetupController(config *bootstrap.Config, timeout time.Duration, db *sqlx.DB, gin *gin.Engine) {

	publicRouter := gin.Group("/api/v1")
	NewProductController(config, db, publicRouter, timeout)

	return
}
