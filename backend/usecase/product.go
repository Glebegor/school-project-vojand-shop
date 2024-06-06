package usecase

import (
	"anderleshop/core/models"
	"anderleshop/repository"
	"time"
)

type ProductUsecase struct {
	repo    repository.ProductRepository
	timeout time.Duration
}

func NewProductUsecase(repo repository.ProductRepository, timeout time.Duration) models.ProductUsecase {
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
