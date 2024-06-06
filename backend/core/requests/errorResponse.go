package requests

import "github.com/gin-gonic/gin"

type ErrorResponse struct {
	Message string `json:"message"`
	Code    int    `json:"code"`
}

func (er *ErrorResponse) GiveResponse(c *gin.Context) {
	c.JSON(er.Code, er)
	return
}
