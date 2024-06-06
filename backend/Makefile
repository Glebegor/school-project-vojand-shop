runapp:
	go run cmd/main.go

rundb:
	docker run --name='anderle-db' -e POSTGRES_PASSWORD="123321" -p 5436:5432 -d --rm postgres

migrateup:
	migrate -path ./migrates -database "postgresql://postgres:123321@localhost:5436/postgres?sslmode=disable" up

migratedown:
	migrate -path ./migrates -database "postgresql://postgres:123321@localhost:5436/postgres?sslmode=disable" down