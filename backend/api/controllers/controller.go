package controllers

import (
	"anderleshop/bootstrap"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"time"
)

func SetupController(config *bootstrap.Config, gin *gin.Engine, db *sqlx.DB, timeout time.Duration) {

	publicRouter := gin.Group("/api/v1")
	NewProductController(config, db, publicRouter, timeout)

	return
}
