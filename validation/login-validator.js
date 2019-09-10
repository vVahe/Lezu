const validator = require('validator');

/**
 * Validates input from the register endpoint
 * Validates username, password
 * @param input: data from register form
 */
module.exports = validate = input => {
    const errors = {};
    let passed = true;

    const { username, password } = input;

    // check if any input is left empty
    if (validator.isEmpty(username.trim()))
        errors.username = 'Username is required';

    // check if password is filled in
    if (validator.isEmpty(password)) errors.password = 'Password is required';

    // check if any errors were found while validating
    if (Object.keys(errors).length > 0) {
        // add validation not passed
        passed = false;
    }

    return { errors, passed };
};
