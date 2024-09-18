CREATE DATABASE IF NOT EXISTS ucode_web;

CREATE USER IF NOT EXISTS 'otsyban'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON *.* TO 'otsyban'@'localhost' WITH GRANT OPTION;

CREATE TABLE IF NOT EXISTS ucode_web.users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(32) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    full_name VARCHAR(32) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
