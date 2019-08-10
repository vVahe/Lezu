-- delete db if it exists
DROP DATABASE IF EXISTS word_trainer;
-- create db
CREATE DATABASE word_trainer;
-- select database
USE word_trainer

-- create users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- create words table
-- @word reference to word being learned
-- @word_meaning is the translated word in any language
-- @language is the language of the word to be learned
CREATE TABLE words (
    word_id INT AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(50) NOT NULL UNIQUE,
    word_meaning VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    language VARCHAR(50),
    category VARCHAR(50) DEFAULT 'all',
    created_at TIMESTAMP DEFAULT NOW()
);

-- create users and words table
CREATE TABLE user_words (
    user_id INT NOT NULL,
    word_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(word_id) REFERENCES words(word_id),
    PRIMARY KEY(user_id, word_id)
);

