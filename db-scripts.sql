-- delete db if it exists
DROP DATABASE IF EXISTS word_trainer;
-- create db
CREATE DATABASE word_trainer;
-- select database
USE word_trainer;

INSERT INTO languages(language_id, language_name)
VALUES  (1, 'Russian'),
        (2, 'English'),
        (3, 'French');

INSERT INTO categories(category_id, category_name)
VALUES  (1, 'furniture'),
        (2, 'number'),
        (3, 'noun'),
        (4, 'verb'),

