const express = require('express');
const bycript = require('bcryptjs');
const router = express.Router();

/** Load User model */
const User = require('../models/users');

/**
 * @route   GET /auth/login
 * @desc    Login user by returning JWT token
 * @access  Public
 */
router.post('/login', (req, res, next) => {});

/**
 * @route   GET /auth/register
 * @desc    Register user
 * @access  Public
 */
router.post('/register', (req, res, next) => {
    const error = {};

    // generate salt and encrypt plain password with salt
    bycript.genSalt(10, (err, salt) => {
        bycript.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;

            User.findOrCreate({
                where: { username: req.body.username },
                defaults: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: hash
                }
            })
                .then(([user, created]) => {
                    // if user already existed
                    if (!created) {
                        error.user = `User with the following username: ${
                            user.username
                        } already exists`;
                        return res.status(400).json(error);
                    } else {
                        // else new user has been registered
                        res.json(user);
                    }
                })
                .catch(err => {
                    error.db = err;
                    res.status(400).json(err);
                });
        });
    });
});

/**
 * @route   GET /auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.post('/logout', (req, res, next) => {});

module.exports = router;
