DROP DATABASE IF EXISTS projectsDB;

CREATE DATABASE projectsDB;

use projectsDB;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(30) NULL,
    user_password VARCHAR(30) NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    PRIMARY KEY (ID)

);

INSERT INTO users (user_name)
VALUES
('Syrus');