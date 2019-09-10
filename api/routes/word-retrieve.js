const express = require('express');
const passport = require('passport');
const router = express.Router();
const sequelize = require('../config/db');

const Word = require('../models/Word');

/**
 * @route   GET /words-retrieve/all_words
 * @desc    GET all words of the logged in user
 * @access  Private
 */
router.get(
    '/all_words',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};

        // find all words
        Word.findAll({ where: { user_id: req.user.user_id } })
            .then(words => {
                // if no words were found return error
                if (Object.keys(words).length === 0) {
                    errors.words = 'no words found';
                    return res.status(400).json(errors);
                }

                // else return found words
                return res.json(words);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   GET /words-retrieve/unreviewed_words
 * @desc    GET all words which have never been reviewed before
 * @access  Private
 */
router.get(
    '/unreviewed_words',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};

        // find all words
        Word.findAll({
            where: { user_id: req.user.user_id, times_reviewed: 0 }
        })
            .then(words => {
                // if no words were found return error
                if (Object.keys(words).length === 0) {
                    errors.words =
                        'No words found that have not been reviewed yet';
                    return res.status(400).json(errors);
                }

                // else return found words
                return res.json(words);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   GET /words-retrieve/recently_added_words/:amount
 * @desc    GET all recently added words
 * @access  Private
 */
router.get(
    '/recently_added_words/:amount',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};

        sequelize
            .query(
                'SELECT * FROM words ORDER BY created_at DESC LIMIT :amount ',
                {
                    replacements: { amount: Number(req.params.amount) },
                    type: sequelize.QueryTypes.SELECT
                }
            )
            .then(words => {
                return res.json(words);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

// return recently created words (1 day, 1 week, 1 month ago)
// return difficult words
// return words by categories
// return words by language
// return words last reviewed wrong (needs schema update)

module.exports = router;

/*
    SELECT * FROM words ORDER BY created_at DESC LIMIT 10
*/
