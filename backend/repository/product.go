package repository

import (
	"anderleshop/core/models"
	"fmt"
	"github.com/jmoiron/sqlx"
)

type ProductRepository struct {
	db *sqlx.DB
}

func NewProductRepository(db *sqlx.DB) models.ProductRepository {
	return &ProductRepository{
		db: db,
	}
}

func (r *ProductRepository) Create(product models.Product) error {
	query := fmt.Sprintf("INSERT INTO product (title, description, price, images, rating) VALUES ('%s', '%s', %d, '%s', %d)", product.Title, product.Description, product.Price, product.Images, product.Rating)
	_, err := r.db.Exec(query)
	return err
}
func (r *ProductRepository) GetAll() ([]models.Product, error) {
	var data []models.Product
	query := "SELECT * FROM product"
	err := r.db.Select(&data, query)
	return data, err
}
func (r *ProductRepository) GetById() {}
func (r *ProductRepository) Update()  {}
func (r *ProductRepository) Delete()  {}
