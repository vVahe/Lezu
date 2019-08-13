const express = require('express');
const passport = require('passport');
const router = express.Router();

const Word = require('../models/Word');
const User = require('../models/User');

// /**
//  * @route   POST /words/add_word
//  * @desc    Add word
//  * @access  Private
//  */
// router.post(
//     '/add_word',
//     passport.authenticate('jwt', { session: false }),
//     (req, res, next) => {
//         const errors = {};

//         const {
//             word,
//             word_meaning,
//             language,
//             description,
//             category
//         } = req.body;
//         const new_word = {
//             word,
//             word_meaning,
//             language,
//             description,
//             category
//         };

//         // find or create word
//         Word.findOrCreate({
//             where: { word: new_word.word },
//             defaults: new_word
//         })
//             .then(([word, created]) => {
//                 if (!created) {
//                     errors.word = 'word already exists';
//                     return res.status(400).json(errors);
//                 }

//                 // add word to the user in bridge table
//                 word.addUsers(req.user);
//                 return res.json('word successfully added');
//             })
//             .catch(err => {
//                 errors.create_word = err;
//                 return res.status(400).json(errors);
//             });
//     }
// );

// /**
//  * @route   GET /words/all_words
//  * @desc    GET all words of the logged in user
//  * @access  Private
//  */
// router.get(
//     '/all_words',
//     passport.authenticate('jwt', { session: false }),
//     (req, res, next) => {}
// );

module.exports = router;
