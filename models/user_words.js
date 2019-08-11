const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const User = require('./users');
const Word = require('./words');
const UserWords = sequelize.define('user_words', {
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
});

module.exports = UserWords;
