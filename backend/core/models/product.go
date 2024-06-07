package models

import "mime/multipart"

type Product struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Price       int    `json:"price"`
	Images      string `json:"images"`
	Rating      int    `json:"rating"`
}

type ProductRepository interface {
	Create(Product) error
	GetAll() ([]Product, error)
	GetById(int) (Product, error)
	Update(string, int) error
	Delete(int) error
	GetTable() string
	UploadImage(fileName string, id int) error
}
type ProductUsecase interface {
	Create(Product) error
	GetAll() ([]Product, error)
	GetById(int) (Product, error)
	Update(Product, int) error
	Delete(int) error
	GetImage(string) ([]byte, error)
	PostImage(file *multipart.FileHeader, id int) error
}
