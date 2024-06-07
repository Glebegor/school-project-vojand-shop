package controllers

import (
	"anderleshop/bootstrap"
	"anderleshop/core/models"
	"anderleshop/core/requests"
	"anderleshop/repository"
	"anderleshop/usecase"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"net/http"
	"strconv"
	"time"
)

type productController struct {
	usecase models.ProductUsecase
}

func NewProductController(config *bootstrap.Config, db *sqlx.DB, r *gin.RouterGroup, timeout time.Duration) {
	tr := repository.NewProductRepository(db, "products")
	tu := usecase.NewProductUsecase(tr, timeout)
	controller := &productController{
		usecase: tu,
	}

	r.POST("/product", controller.CreateProduct)
	r.GET("/product", controller.GetAllProduct)
	r.GET("/product/:id", controller.GetProduct)
	r.PUT("/product/:id", controller.UpdateProduct)
	r.DELETE("/product/:id", controller.DeleteProduct)

	r.GET("/productImage/:name", controller.GetImage)
	r.POST("/productImage/:id", controller.PostImage)

	return
}

func (ct *productController) CreateProduct(c *gin.Context) {
	var input models.Product
	if err := c.ShouldBindJSON(&input); err != nil {
		response := requests.ErrorResponse{
			Message: "Invalid input, please check your input type (json) and key",
			Code:    http.StatusBadRequest,
		}
		response.GiveResponse(c)
		return
	}

	err := ct.usecase.Create(input)
	if err != nil {
		response := requests.ErrorResponse{
			Message: err.Error(),
			Code:    http.StatusBadGateway,
		}
		response.GiveResponse(c)
		return
	}

	response := requests.SuccessResponse{
		Message: "Created new product successfully",
	}
	response.GiveResponse(c)
	return
}
func (ct *productController) GetProduct(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		response := requests.ErrorResponse{
			Message: "Invalid input, please check your id",
			Code:    http.StatusBadRequest,
		}
		response.GiveResponse(c)
		return
	}

	product, err := ct.usecase.GetById(id)
	if err != nil {
		response := requests.ErrorResponse{
			Message: err.Error(),
			Code:    http.StatusBadGateway,
		}
		response.GiveResponse(c)
		return
	}

	response := requests.SuccessResponseWithData{
		Message: "Get product successfully",
		Data:    product,
	}
	response.GiveResponse(c)
	return
}
func (ct *productController) GetAllProduct(c *gin.Context) {
	products, err := ct.usecase.GetAll()
	if err != nil {
		response := requests.ErrorResponse{
			Message: err.Error(),
			Code:    http.StatusBadGateway,
		}
		response.GiveResponse(c)
		return

	}
	response := requests.SuccessResponseWithData{
		Message: "Get all product successfully",
		Data:    products,
	}
	response.GiveResponse(c)
	return
}
func (ct *productController) UpdateProduct(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		response := requests.ErrorResponse{
			Message: "Invalid input, please check your id",
			Code:    http.StatusBadRequest,
		}
		response.GiveResponse(c)
		return
	}

	var input models.Product

	if err := c.ShouldBindJSON(&input); err != nil {
		response := requests.ErrorResponse{
			Message: "Invalid input, please check your input type (json) and key",
			Code:    http.StatusBadRequest,
		}
		response.GiveResponse(c)
		return
	}

	err = ct.usecase.Update(input, id)
	if err != nil {
		response := requests.ErrorResponse{
			Message: err.Error(),
			Code:    http.StatusBadGateway,
		}
		response.GiveResponse(c)
		return
	}

	response := requests.SuccessResponse{
		Message: "Updated product successfully",
	}
	response.GiveResponse(c)
	return
}
func (ct *productController) DeleteProduct(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		response := requests.ErrorResponse{
			Message: "Invalid input, please check your id",
			Code:    http.StatusBadRequest,
		}
		response.GiveResponse(c)
		return
	}

	err = ct.usecase.Delete(id)
	if err != nil {
		response := requests.ErrorResponse{
			Message: err.Error(),
			Code:    http.StatusBadGateway,
		}
		response.GiveResponse(c)
		return
	}

	response := requests.SuccessResponse{
		Message: "Deleted product successfully",
	}
	response.GiveResponse(c)
	return
}

func (ct *productController) GetImage(c *gin.Context) {
	name := c.Param("name")
	file, err := ct.usecase.GetImage(name)
	if err != nil {
		response := requests.ErrorResponse{
			Message: err.Error(),
			Code:    http.StatusBadGateway,
		}
		response.GiveResponse(c)
		return
	}

	c.Data(http.StatusOK, "image/jpeg", file)
	return
}

func (ct *productController) PostImage(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		response := requests.ErrorResponse{
			Message: "Invalid input, please check your id",
			Code:    http.StatusBadRequest,
		}
		response.GiveResponse(c)
		return
	}

	file, err := c.FormFile("image")
	if err != nil {
		response := requests.ErrorResponse{
			Message: "Invalid input, please check your image key",
			Code:    http.StatusBadRequest,
		}
		response.GiveResponse(c)
		return
	}

	err = ct.usecase.PostImage(file, id)
	if err != nil {
		response := requests.ErrorResponse{
			Message: err.Error(),
			Code:    http.StatusBadGateway,
		}
		response.GiveResponse(c)
		return
	}

	response := requests.SuccessResponse{
		Message: "Uploaded image successfully",
	}
	response.GiveResponse(c)
	return

}
