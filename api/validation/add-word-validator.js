const validator = require('validator');

/**
 * Validates input from the add word input
 * Validates word, word_meaning
 * @param input: data from add word form
 */
module.exports = validate = input => {
    const errors = {};
    let passed = true;

    const { word, word_meaning, word_note, language_id } = input;

    // check if word length is less than 24 characters
    if (!validator.isLength(word.trim(), { max: 24 })) {
        errors.word = 'Word can be at most 24 characters';
    }

    // check if word_meaning length is less than 24 characters
    if (!validator.isLength(word_meaning.trim(), { max: 24 })) {
        errors.word = 'Word meaning can be at most 24 characters';
    }

    // check if word_note length is less than 250 characters
    if (!validator.isLength(word_note.trim(), { max: 250 })) {
        errors.word_note = 'Word note can be at most 250 characters';
    }

    // check if word is filled in
    if (validator.isEmpty(word.trim())) errors.word = 'Word field is required';

    // check if word meaning is filled in
    if (validator.isEmpty(word_meaning.trim()))
        errors.word_meaning = 'Word meaning is required';

    // check if language is selected
    if (validator.isEmpty(language_id + ''))
        errors.language = 'Select a language';

    // check if any errors were found while validating
    if (Object.keys(errors).length > 0) {
        // add validation not passed
        passed = false;
    }

    return { errors, passed };
};
