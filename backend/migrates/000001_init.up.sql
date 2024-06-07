CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    price INT,
    description VARCHAR(500),
    images VARCHAR(2500),
    rating INT
);
