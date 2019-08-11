const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const keys = require('../util/keys');
const router = express.Router();

/** Load User model */
const User = require('../models/users');

/**
 * @route   POST /auth/login
 * @desc    Login user by returning JWT token
 * @access  Public
 */
router.post('/login', (req, res, next) => {
    const error = {};
    // find user with incoming username
    // TODO: login with email

    User.findOne({ where: { username: req.body.username } }).then(user => {
        if (!user) {
            // if a user is not found
            error.user = 'user with this username was not found';
            return res.status(400).json(error);
        }

        // compare incoming & db password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // password correct send back JWT token

                // create payload for the JWT token
                const payload = {
                    user_id: user.user_id,
                    username: user.username,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                };

                // sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    // FIXME: set JWToken expire date to 60 min in production
                    { expiresIn: 3600 * 24 },
                    (err, token) => {
                        // return token
                        return res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    }
                );
            } else {
                // password incorrect send back error msg
                error.password = 'password was incorrect';
                return res.status(400).json(error);
            }
        });
    });
});

/**
 * @route   POST /auth/register
 * @desc    Register user
 * @access  Public
 */
router.post('/register', (req, res, next) => {
    const error = {};
    // TODO: using the same email won't give an appropriate error yet
    // generate salt and encrypt plain password with salt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
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
                    if (!created) {
                        // user already exists throw error
                        error.user = `User with the following username: ${
                            user.username
                        } already exists`;
                        return res.status(400).json(error);
                    } else {
                        // return registered user
                        return res.json(user);
                    }
                })
                .catch(err => {
                    error.db = err;
                    return res.status(400).json(err);
                });
        });
    });
});

/**
 * @route   GET /auth/current
 * @desc    Returns the currently logged in user
 * @access  Private
 * TODO: remove in production
 */
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json(req.user);
    }
);

/**
 * @route   GET /auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.post('/logout', (req, res, next) => {});

module.exports = router;
