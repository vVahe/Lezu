const Sequelize = require('sequelize');
const sequelize = require('../config/db');

/**
 * The following model defines the category schema
 * @category_id    : id of the category
 * @category_name  : category name
 * Words can have one or more categories related to them
 */
const Category = sequelize.define(
    'categories',
    {
        category_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
);

module.exports = Category;
