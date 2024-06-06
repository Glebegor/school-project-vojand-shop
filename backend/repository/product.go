package repository

import (
	"anderleshop/core/models"
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

func (r *ProductRepository) Create()  {}
func (r *ProductRepository) GetAll()  {}
func (r *ProductRepository) GetById() {}
func (r *ProductRepository) Update()  {}
func (r *ProductRepository) Delete()  {}
