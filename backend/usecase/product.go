package usecase

import (
	"anderleshop/core/models"
	"bytes"
	"fmt"
	"image"
	"image/png"
	"log"
	"os"
	"strings"
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
	var countProducts int
	var valueToUpdate []string
	var query string

	if product.Title != "-" {
		valueToUpdate = append(valueToUpdate, "title='"+product.Title+"'")
		countProducts++
	}
	if product.Description != "-" {
		valueToUpdate = append(valueToUpdate, "description='"+product.Description+"'")
		countProducts++
	}
	if product.Price != -1 {
		valueToUpdate = append(valueToUpdate, fmt.Sprintf("price=%d", product.Price))
		countProducts++
	}
	if product.Images != "-" {
		valueToUpdate = append(valueToUpdate, "images='"+product.Images+"'")
		countProducts++
	}
	if product.Rating != -1 {
		valueToUpdate = append(valueToUpdate, fmt.Sprintf("rating=%d", product.Rating))
		countProducts++
	}

	if countProducts == 0 {
		return fmt.Errorf("No data to update")
	}
	query = fmt.Sprintf("UPDATE %s SET (%s) WHERE id=%d", u.repo.GetTable(), strings.Join(valueToUpdate, ", "), id)
	fmt.Printf(query)
	return u.repo.Update(query, id)
}
func (u *ProductUsecase) Delete(id int) error {
	return u.repo.Delete(id)
}

func (u *ProductUsecase) GetImage(name string) ([]byte, error) {
	file, err := os.Open("assets/products/" + name)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	img, _, err := image.Decode(file)
	if err != nil {
		return nil, err
	}

	var buf bytes.Buffer
	err = png.Encode(&buf, img)
	if err != nil {
		log.Fatal(err)
	}

	imgBytes := buf.Bytes()
	return imgBytes, nil
}
