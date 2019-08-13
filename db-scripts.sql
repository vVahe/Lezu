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

