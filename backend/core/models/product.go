package models

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
	Update()
	Delete()
}
type ProductUsecase interface {
	Create(Product) error
	GetAll() ([]Product, error)
	GetById(int) (Product, error)
	Update()
	Delete()
}
