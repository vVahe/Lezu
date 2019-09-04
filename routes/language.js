const express = require('express');
const Language = require('../models/Language');
const Sequelize = require('sequelize');

const router = express.Router();

// sequelize operator for more complex comparisons
const Op = Sequelize.Op;

/**
 * @route   GET /language/search/:value
 * @desc    Get languages matching the value search paramater
 * @access  Public
 * Search language end-point for asynch autocomplete seaching
 */
router.get('/search/:value', (req, res, next) => {
    errors = {};

    Language.findAll({
        where: {
            language_name: {
                [Op.like]: `%${req.params.value}%`
            }
        }
    })
        .then(langs => {
            const languages = langs.map(lang => {
                return { value: lang.language_id, label: lang.language_name };
            });
            res.json({ languages });
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
