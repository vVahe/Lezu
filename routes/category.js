const express = require('express');
const Category = require('../models/Category');
const Sequelize = require('sequelize');

const router = express.Router();

// sequelize operator for more complex comparisons
const Op = Sequelize.Op;

/**
 * @route   GET /category/search/:value
 * @desc    Get categories matching the value search paramater
 * @access  Public
 * Search category end-point for asynch autocomplete seaching
 */
router.get('/search/:value', (req, res, next) => {
    errors = {};

    Category.findAll({
        where: {
            category_name: {
                [Op.like]: `%${req.params.value}%`
            }
        }
    })
        .then(categories => {
            res.json({ categories });
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
