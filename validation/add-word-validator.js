const validator = require('validator');

/**
 * Validates input from the add word input
 * Validates word, word_meaning
 * @param input: data from add word form
 */
module.exports = validate = input => {
    const errors = {};
    let passed = true;

    const { word, word_meaning } = input;

    // check if word length is less than 24 characters
    if (!validator.isLength(word.trim(), { max: 24 })) {
        errors.word = 'word can be at most 24 characters';
    }

    // check if word_meaning length is less than 36 characters
    if (!validator.isLength(word.trim(), { max: 36 })) {
        errors.word = 'word meaning can be at most 36 characters';
    }

    // check if word length is less than 24 characters
    if (!validator.isLength(word.trim(), { max: 24 })) {
        errors.word = 'word must be at most 24 characters';
    }

    // check if word length is less than 24 characters
    if (!validator.isLength(word.trim(), { max: 24 })) {
        errors.word = 'word must be at most 24 characters';
    }

    // check if word length is less than 24 characters
    if (!validator.isLength(word.trim(), { max: 24 })) {
        errors.word = 'word must be at most 24 characters';
    }

    // check if word is filled in
    if (validator.isEmpty(word.trim())) errors.word = 'word field is required';

    // check if word meaning is filled in
    if (validator.isEmpty(word_meaning.trim()))
        errors.word_meaning = 'word meaning is required';

    // check if any errors were found while validating
    if (Object.keys(errors).length > 0) {
        // add validation not passed
        passed = false;
    }

    return { errors, passed };
};
