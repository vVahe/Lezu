const express = require('express');
const Language = require('../models/Language');
const Sequelize = require('sequelize');

const router = express.Router();

// sequelize operator for more complex comparisons
const Op = Sequelize.Op;

/**
 * @route   GET /language/all_languages
 * @desc    Get all languages
 * @access  Public
 * Returns all supported languages
 */
router.get('/all_languages', async (req, res, next) => {
    try {
        const langs = await awaitLanguage.findAll();
        // format language array
        const languages = langs.map(lang => {
            return { value: lang.language_id, label: lang.language_name };
        });
        return res.json({ languages });
    } catch (err) {
        return res.status(400).json(err);
    }
});

module.exports = router;
