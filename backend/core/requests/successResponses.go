package requests

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type SuccessResponse struct {
	Message string `json:"message"`
}

func (sr *SuccessResponse) GiveResponse(c *gin.Context) {
	c.JSON(http.StatusOK, sr)
	return
}
