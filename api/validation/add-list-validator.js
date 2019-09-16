const validator = require('validator');

/**
 * Validates the name of list
 * Validates list_name
 * @param input: data from add word form
 */
module.exports = validate = input => {
    const errors = {};
    let passed = true;

    const { list_name } = input;

    // check if list name length is less than 24 characters
    if (!validator.isLength(list_name.trim(), { max: 24 })) {
        errors.list_name = 'List name can be at most 24 characters';
    }

    // check if list name is filled in
    if (validator.isEmpty(list_name.trim()))
        errors.list_name = 'List name is required';

    // check if any errors were found while validating
    if (Object.keys(errors).length > 0) {
        // add validation not passed
        passed = false;
    }

    return { errors, passed };
};
