runapp:
	go run cmd/main.go

rundb:
	docker run --name='anderle-db' -e POSTGRES_PASSWORD="123321" -p 5436:5432 -d --rm postgres