const express = require('express');
const passport = require('passport');
const router = express.Router();
const sequelize = require('../config/db');

const List = require('../models/List');
const Word = require('../models/Word');
const addListValidator = require('../validation/add-list-validator');

/**
 * @route   POST /lists/create_list
 * @desc    Create a new list for the user
 * @access  Private
 */
router.post(
    '/create_list',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        try {
            const { errors, passed } = addListValidator(req.body);

            // check if validation passed
            if (!passed) {
                return res.status(400).json(errors);
            }

            // check if list with the given name already exists
            const results = await List.findOrCreate({
                where: {
                    list_name: req.body.list_name,
                    user_id: req.user.user_id
                }
            });

            if (!results[1]) {
                errors.list = 'List with this name already exists';
                return res.status(400).json(errors);
            } else {
                return res.json({ message: 'List created' });
            }
        } catch (err) {
            return res.status(400).json(err);
        }
    }
);

/**
 * @route   DELETE /lists/delete_list/:list_id
 * @desc    Delete a list of the user
 * @access  Private
 */
router.post(
    '/delete_list/:list_id',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        try {
            const result = await List.destroy({
                where: { list_id: req.params.list_id }
            });
            if (result) {
                return res.json({
                    message: 'List succesfully deleted'
                });
            } else {
                return res.json({
                    message:
                        'Something went wrong, list not deleted or did not exist'
                });
            }
        } catch (err) {
            return res.status(400).json(err);
        }
    }
);

/**
 * @route   GET /lists/all_lists
 * @desc    Get all lists of the user
 * @access  Private
 */
router.get(
    '/all_lists',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        try {
            const lists = await List.findAll({
                where: { user_id: req.user.user_id }
            });
            return res.json(lists);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
);

/**
 * @route   POST /lists/add_word/:list_id/:word_id
 * @desc    Add word to a list
 * @access  Private
 */
router.post(
    '/add_word/:list_id/:word_id',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        try {
            const word = await Word.findByPk(req.params.word_id);
            const list = await List.findByPk(req.params.list_id);
            list.addWord(word);
            return res.json({ message: 'Word successfully added to list' });
        } catch (err) {
            return res.status(400).json(err);
        }
    }
);

/**
 * @route   POST /lists/delete_word/:list_id/:word_id
 * @desc    Delete word from a list
 * @access  Private
 */
router.post(
    '/delete_word/:list_id/:word_id',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        try {
            const result = await sequelize.model('words_lists').destroy({
                where: {
                    word_id: req.params.word_id,
                    list_id: req.params.list_id
                }
            });
            return res.json({ message: 'Word removed from list' });
        } catch (err) {
            return res.status(400).json(err);
        }
    }
);

module.exports = router;
