const validator = require('validator');

/**
 * Validates input from the register endpoint
 * Validates username, first_name, last_name, password, password_repeat, email
 * @param input: data from register form
 */
module.exports = validate = input => {
    const errors = {};
    let passed = true;

    const {
        username,
        first_name,
        last_name,
        email,
        password,
        password_repeat
    } = input;

    // check: username length between 4 and 16 characters
    if (!validator.isLength(username.trim(), { min: 4, max: 24 })) {
        errors.username = 'Username must be between 4 and 24 characters';
    }

    // check: password length between 8 and 36 characters
    if (!validator.isLength(password, { min: 8, max: 36 })) {
        errors.password = 'password must be between 8 and 36 characters';
    }

    // check: first_name length between 2 and 24 characters
    if (!validator.isLength(first_name.trim(), { min: 2, max: 36 })) {
        errors.first_name = 'first name must be between 2 and 36 characters';
    }

    // check: last_name length between 1 and 24 characters
    if (!validator.isLength(last_name.trim(), { min: 1, max: 36 })) {
        errors.last_name = 'last name must be between 1 and 36 characters';
    }

    // check: email is a valid email
    if (!validator.isEmail(email.trim())) {
        errors.email = 'invalid email format';
    }

    // check: password is the same as password_repeat
    if (!validator.equals(password, password_repeat)) {
        errors.password_repeat = 'passwords do not match';
    }

    // check if any input is left empty
    if (validator.isEmpty(username.trim()))
        errors.username = 'username is required';

    if (validator.isEmpty(first_name.trim()))
        errors.first_name = 'first name is required';

    if (validator.isEmpty(last_name.trim()))
        errors.last_name = 'last name is required';

    if (validator.isEmpty(email.trim())) errors.email = 'email is required';

    if (validator.isEmpty(password)) errors.password = 'password is required';

    if (validator.isEmpty(password_repeat))
        errors.password_repeat = 'password repeat is required';

    // check if any errors were found while validating
    if (Object.keys(errors).length > 0) {
        // add validation not passed
        passed = false;
    }

    return {
        errors,
        passed
    };
};
