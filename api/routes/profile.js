const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = express.Router();

/**
 * @route   GET /profile
 * @desc    Get logged in users profile
 * @access  Private
 * TODO: remove in production
 */
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { username, first_name, last_name, email } = req.user;
        const profile = {
            username,
            first_name,
            last_name,
            email
        };
        res.json(profile);
    }
);

/**
 * @route   UPDATE /auth/current
 * @desc    Update user information
 * @access  Private
 */

module.exports = router;
