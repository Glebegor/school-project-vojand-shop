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
func (r *ProductRepository) UploadImage(fileName string, id int) error {
	tx, err := r.db.Begin()
	if err != nil {
		return err
	}

	// Prepare the SELECT query to check if the product exists and get the current images
	query1 := fmt.Sprintf("SELECT images FROM %s WHERE id = $1", r.table)
	var existingImages string
	err = tx.QueryRow(query1, id).Scan(&existingImages)
	if err != nil {
		tx.Rollback()
		return err
	}

	// Append the new image name to the existing images, separated by a semicolon
	var newImages string
	if existingImages == "" {
		newImages = fileName
	} else {
		newImages = existingImages + ";" + fileName
	}

	// Prepare the UPDATE query to update the images
	query2 := fmt.Sprintf("UPDATE %s SET images = $1 WHERE id = $2", r.table)
	_, err = tx.Exec(query2, newImages, id)
	if err != nil {
		tx.Rollback()
		return err
	}

	err = tx.Commit()
	if err != nil {
		return err
	}

	return nil
}
