-- The following file populates the languages and categories tables with initial values

INSERT INTO languages(language_id, language_name)
VALUES  (1, 'Russian'),
        (2, 'English'),
        (3, 'French');

INSERT INTO categories(category_id, category_name)
VALUES  (1, 'furniture'),
        (2, 'number'),
        (3, 'noun'),
        (4, 'verb'),
        (5, 'adjective');