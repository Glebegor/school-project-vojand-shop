package requests

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type SuccessResponseWithData struct {
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

func (sr *SuccessResponseWithData) GiveResponse(c *gin.Context) {
	c.JSON(http.StatusOK, sr)
	return
}
