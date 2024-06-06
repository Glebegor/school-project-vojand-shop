package controllers

import (
	"anderleshop/bootstrap"
	"anderleshop/core/models"
	"anderleshop/repository"
	"anderleshop/usecase"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"time"
)

type productController struct {
	usecase models.ProductUsecase
}

func NewProductController(config *bootstrap.Config, db *sqlx.DB, r *gin.RouterGroup, timeout time.Duration) {
	tr := repository.NewProductRepository(db)
	tu := usecase.NewProductUsecase(tr, timeout)
	controller := &productController{
		usecase: tu,
	}

	r.POST("/product", controller.CreateProduct)
	r.GET("/product", controller.GetAllProduct)
	r.GET("/product/:id", controller.GetProduct)
	r.PUT("/product/:id", controller.UpdateProduct)
	r.DELETE("/product/:id", controller.DeleteProduct)

	return
}

func (ct *productController) CreateProduct(c *gin.Context) {
	var input models.Product
	return
}
func (ct *productController) GetProduct(c *gin.Context) {

	return
}
func (ct *productController) GetAllProduct(c *gin.Context) {

	return
}
func (ct *productController) UpdateProduct(c *gin.Context) {

	return
}
func (ct *productController) DeleteProduct(c *gin.Context) {

	return
}