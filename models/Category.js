const Sequelize = require('sequelize');
const sequelize = require('../util/db');

/**
 * The following model defines the user schema
 * @category_id    : id of the category
 * @category_name  : category in text
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
