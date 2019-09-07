const express = require('express');
const passport = require('passport');
const router = express.Router();
const sequelize = require('../config/db');

/**
 * @route   POST /words/update_word_reviewing/:word_id
 * @desc    Update review stats of a word
 * @access  Private
 */
router.post(
    '/update_word/:word_id',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {}
);

// return recently created words (1 day, 1 week, 1 month ago)
// return difficult words
// return words by categories
// return words by language
// return untrained words
// return words last reviewed wrong (needs schema update)
