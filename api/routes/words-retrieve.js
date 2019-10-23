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
    async (req, res, next) => {
        try {
            const words = await Word.findAll({
                where: { user_id: req.user.user_id }
            });
            return res.json(words);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
);

/**
 * @route   GET /words-retrieve/all_words_sort/:sortby/:order
 * @desc    GET all words of the logged in user, sortedby and order
 * @access  Private
 */
router.get(
    '/all_words_sort/:sortby/:order',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        try {
            const words = await Word.findAll({
                where: { user_id: req.user.user_id },
                order: [[`${req.params.sortby}`, `${req.params.order}`]]
            });
            console.log(words);

            return res.json(words);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
);

/**
 * @route   GET /words-retrieve/unreviewed_words
 * @desc    GET all words which have never been reviewed before
 * @access  Private
 */
router.get(
    '/unreviewed_words/:amount',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};

        sequelize
            .query(
                'SELECT * FROM words WHERE times_reviewed = :times_reviewed ORDER BY created_at DESC LIMIT :amount',
                {
                    replacements: {
                        times_reviewed: 0,
                        amount: Number(req.params.amount)
                    },
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

/**
 * @route   GET /words-retrieve/difficult_words/:amount
 * @desc    GET all difficult words
 * @access  Private
 */
router.get(
    '/difficult_words/:amount',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};

        sequelize
            .query(
                'SELECT * FROM words WHERE times_incorrect > :times_incorrect ORDER BY times_incorrect DESC LIMIT :amount',
                {
                    replacements: {
                        times_incorrect: 0,
                        amount: Number(req.params.amount)
                    },
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

/**
 * @route   GET /words-retrieve/random_words/:amount
 * @desc    GET random words
 * @access  Private
 */
router.get(
    '/random_words/:amount',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};

        sequelize
            .query('SELECT * FROM words ORDER BY RAND() LIMIT :amount', {
                replacements: { amount: Number(req.params.amount) },
                type: sequelize.QueryTypes.SELECT
            })
            .then(words => {
                return res.json(words);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   GET /words-retrieve/least_reviewed_words/:amount
 * @desc    GET least reviewed words
 * @access  Private
 */
router.get(
    '/least_reviewed/:amount',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};

        sequelize
            .query(
                'SELECT * FROM words ORDER BY times_reviewed ASC LIMIT :amount ',
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

module.exports = router;

/*
    SELECT * FROM words ORDER BY created_at DESC LIMIT 10
*/
