const express = require('express');
const passport = require('passport');
const router = express.Router();
const sequelize = require('../config/db');

// import validators
const addWordValidator = require('../validation/add-word-validator');

const Word = require('../models/Word');

/**
 * @route   POST /words-modify/add_word
 * @desc    Add word
 * @access  Private
 */
router.post(
    '/add_word',
    passport.authenticate('jwt', { session: false }),

    (req, res, next) => {
        const { errors, passed } = addWordValidator(req.body);

        // check if validation passed
        if (!passed) {
            return res.status(400).json(errors);
        }

        // get parameters from req
        const { word, word_meaning, language_id } = req.body;
        // create new word object
        const new_word = {
            word,
            word_meaning,
            language_id,
            user_id: req.body.user_id
        };

        // find or create word
        Word.findOrCreate({
            where: {
                word: new_word.word,
                user_id: req.user.user_id,
                language_id
            },
            defaults: new_word
        })
            .then(([word, created]) => {
                // if word already existed send error
                if (!created) {
                    errors.word = `The word: ${new_word.word} already exists in your selected language`;
                    return res.status(400).json(errors);
                }

                return res.json({ message: 'Word successfully added' });
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   POST /words-modify/delete_word/:word_id
 * @desc    Delete a word
 * @access  Private
 */
router.post(
    '/delete_word/:word_id',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};
        Word.destroy({ where: { word_id: req.params.word_id } })
            .then(result => {
                if (result) {
                    return res.json({
                        message: 'Word succesfully deleted'
                    });
                }

                errors.add_word = 'Word does not exist';
                return res.status(404).json(errors);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   POST /words-modify/delete_all
 * @desc    Delete all words
 * @access  Private
 */
router.post(
    '/delete_all',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = {};
        Word.destroy({ where: { user_id: req.user.user_id } })
            .then(result => {
                if (result) {
                    return res.json({
                        message: 'All words deleted'
                    });
                }

                errors.delete_word = 'No words found to delete';
                return res.status(404).json(errors);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   POST /words-modify/update_word/:word_id
 * @desc    Update a word
 * @access  Private
 */
router.post(
    '/update_word/:word_id',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        console.log(req.body);
        const { errors, passed } = addWordValidator(req.body);

        if (!passed) {
            return res.status(400).json(errors);
        }

        const { word, word_meaning, language_id } = req.body;
        const updatedWord = {
            word,
            word_meaning,
            language_id
        };

        Word.update(updatedWord, { where: { word_id: req.params.word_id } })
            .then(result => {
                if (result) {
                    console.log(result);
                    return res.json({
                        message: 'Word successfully updated'
                    });
                }

                errors.update_word = 'Failed to update word';
                return res.status(404).json(errors);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   PUT /words-modify/update_word_reviewing/:word_id/:result
 * @desc    Update reviewing stats of a word
 * @access  Private
 * Update the times_reviewed, times_correct, times_incorrect properties of a word
 * if the incoming request has a paramater of result=correct then times_reviewed and
 * times_correct is updated, if result=incorrect then times_reviewed and times_incorrect
 * is updated
 */
router.put(
    '/update_word_reviewing/:word_id/:result',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        let incrementCorrect = 1;
        let incrementIncorrect = 0;

        if (req.params.result === 'incorrect') {
            incrementCorrect = 0;
            incrementIncorrect = 1;
        }

        Word.findByPk(req.params.word_id)
            .then(word => {
                return word
                    .increment({
                        times_reviewed: 1,
                        times_correct: incrementCorrect,
                        times_incorrect: incrementIncorrect
                    })
                    .then(result => {
                        return res.json({ message: 'ok' });
                    });
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

module.exports = router;
