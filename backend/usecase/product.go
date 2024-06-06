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

func (u *ProductUsecase) Create(product models.Product) error {
	err := u.repo.Create(product)
	return err
}
func (u *ProductUsecase) GetAll() ([]models.Product, error) {
	return u.repo.GetAll()
}
func (u *ProductUsecase) GetById(id int) (models.Product, error) {
	return u.repo.GetById(id)
}
func (u *ProductUsecase) Update(product models.Product, id int) error {

	return u.repo.Update(product, id)
}
func (u *ProductUsecase) Delete(id int) error {
	return u.repo.Delete(id)
}

func (u *ProductUsecase) GetImages() ([]string, error) {
	return nil, nil
}
