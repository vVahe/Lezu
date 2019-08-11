const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const User = require('./users');
const Word = require('./words');

/**
 * Define user_words table
 * @user_id & @word_id define which users has which words
 * created_at & updated_at columns automatically added by ORM
 */
const UserWords = sequelize.define(
    'user_words',
    {
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: 'user_id'
            },
            primaryKey: true
        },
        word_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Word,
                key: 'word_id'
            },
            primaryKey: true
        }
    },
    { underscored: true }
);

module.exports = UserWords;
