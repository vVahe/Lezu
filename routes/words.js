const express = require('express');
const passport = require('passport');
const router = express.Router();

// import validators
const addWordValidator = require('../validation/add-word-validator');

const Word = require('../models/Word');
const Category = require('../models/Category');

/**
 * @route   POST /words/add_word
 * @desc    Add word
 * @access  Private
 */
router.post(
    '/add_word',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const { errors, passed } = addWordValidator(req.body);

        if (!passed) {
            // validation did not pass send error
            return res.status(400).json(errors);
        }

        const { word, word_meaning, language_id, categories } = req.body;
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
                    errors.word = `The word: ${
                        new_word.word
                    } already exists in your selected language`;
                    return res.status(400).json(errors);
                }

                // add categories in wordcategory associations table
                const categoryArray = categories.split(',');
                categoryArray.forEach(category_id => {
                    Category.findByPk(parseInt(category_id)).then(category => {
                        word.addCategory(category);
                    });
                });
                return res.json('word successfully added');
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   GET /words/all_words
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
 * @route   POST /words/delete_word/:word_id
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
                        word_delete: 'word succesfully deleted'
                    });
                }

                errors.delete_word = 'word does not exist';
                return res.status(404).json(errors);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   POST /words/delete_all
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
                        word_delete: 'all words deleted'
                    });
                }

                errors.delete_word = 'no words found to delete';
                return res.status(404).json(errors);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   POST /words/update_word/:word_id
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
                        word_delete: 'word successfully updated'
                    });
                }

                errors.update_word = 'failed to update word';
                return res.status(404).json(errors);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
);

/**
 * @route   POST /words/update_word_categories/:word_id
 * @desc    Update a word categories
 * @access  Private
 */
router.post(
    '/update_word/:word_id',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {}
);

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

module.exports = router;
