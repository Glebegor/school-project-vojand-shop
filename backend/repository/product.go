package repository

import (
	"anderleshop/core/models"
	"fmt"
	"github.com/jmoiron/sqlx"
)

type ProductRepository struct {
	db    *sqlx.DB
	table string
}

func NewProductRepository(db *sqlx.DB, table string) models.ProductRepository {
	return &ProductRepository{
		db:    db,
		table: table,
	}
}

func (r *ProductRepository) Create(product models.Product) error {
	query := fmt.Sprintf("INSERT INTO %s (title, description, price, images, rating) VALUES ('%s', '%s', %d, '%s', %d)", r.table, product.Title, product.Description, product.Price, product.Images, product.Rating)
	_, err := r.db.Exec(query)
	return err
}
func (r *ProductRepository) GetAll() ([]models.Product, error) {
	var data []models.Product
	query := fmt.Sprintf("SELECT * FROM %s", r.table)
	err := r.db.Select(&data, query)
	return data, err
}
func (r *ProductRepository) GetById() {}
func (r *ProductRepository) Update()  {}
func (r *ProductRepository) Delete()  {}
