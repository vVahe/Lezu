const Sequelize = require('sequelize');
const sequelize = require('../util/db');

/**
 * Define users table
 * @word : word to be learned
 * @word_meaning : translation of the @word to be learned
 * @language : language of @word
 * @category : category of @word
 * @created_at & @updated_at columns automatically added by ORM
 */
const Word = sequelize.define(
    'words',
    {
        word_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        word: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        word_meaning: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: Sequelize.STRING,
        language: Sequelize.STRING,
        category: {
            type: Sequelize.STRING,
            defaultValue: 'all'
        }
    },
    { underscored: true }
);

module.exports = Word;
