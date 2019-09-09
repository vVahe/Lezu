-- delete db if it exists
DROP DATABASE IF EXISTS word_trainer;
-- create db
CREATE DATABASE word_trainer;
-- select database
USE word_trainer;

-- create tables
CREATE TABLE categories;
CREATE TABLE languages;

-- The following file populates the languages and categories tables with initial values

INSERT INTO languages(language_id, language_name)
VALUES  (1, 'russian'),
        (2, 'english'),
        (3, 'french');
        

INSERT INTO categories(category_id, category_name)
VALUES  (1, 'furniture'),
        (2, 'numbers'),
        (3, 'noun'),
        (4, 'verb'),
        (5, 'adjective'),
        (6, 'sports'),
        (7, 'animals'),
        (8, 'body part'),
        (9, 'clothes'),
        (10, 'colors'),
        (11, 'months'),
        (12, 'days of the week'),
        (13, 'seasons'),
        (14, 'dessert'),
        (15, 'food'),
        (16, 'shapes'),
        (17, 'weather'),
        (18, 'countries' ),
        (19, 'proposition' );



