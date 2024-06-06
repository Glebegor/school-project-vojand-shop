package usecase

import (
	"anderleshop/core/models"
	"time"
)

type ProductUsecase struct {
	repo    models.ProductRepository
	timeout time.Duration
}

func NewProductUsecase(repo models.ProductRepository, timeout time.Duration) models.ProductUsecase {
	return &ProductUsecase{
		repo:    repo,
		timeout: timeout,
	}
}

func (u *ProductUsecase) Create()  {}
func (u *ProductUsecase) GetAll()  {}
func (u *ProductUsecase) GetById() {}
func (u *ProductUsecase) Update()  {}
func (u *ProductUsecase) Delete()  {}
