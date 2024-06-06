package models

type Product struct {
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
