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

module.exports = router;
