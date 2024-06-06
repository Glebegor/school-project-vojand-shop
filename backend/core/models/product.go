package models

type Product struct {
	ID          int      `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Price       int      `json:"price"`
	images      []string `json:"images"`
	rating      int      `json:"rating"`
}

type ProductRepository interface {
	Create()
	GetAll()
	GetById()
	Update()
	Delete()
}
type ProductUsecase interface {
	Create()
	GetAll()
	GetById()
	Update()
	Delete()
}
