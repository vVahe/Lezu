const Sequelize = require('sequelize');
const sequelize = require('../util/db');

/**
 * The following model defines the language schema
 * @language_id    : id of the language
 * @language_name  : language in text
 *
 * Languages will be inserted in the manually
 */
const Language = sequelize.define(
    'languages',
    {
        language_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        language_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    { timestamps: false }
);

module.exports = Language;
