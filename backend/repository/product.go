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
func (r *ProductRepository) GetTable() string {
	return r.table
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
func (r *ProductRepository) GetById(id int) (models.Product, error) {
	var data models.Product
	query := fmt.Sprintf("SELECT * FROM %s WHERE id = %d", r.table, id)
	err := r.db.Get(&data, query)
	return data, err
}
func (r *ProductRepository) Update(query string, id int) error {
	_, err := r.db.Exec(query)
	return err
}
func (r *ProductRepository) Delete(id int) error {
	query := fmt.Sprintf("DELETE FROM %s WHERE id=%d", r.table, id)
	_, err := r.db.Exec(query)
	return err
}
