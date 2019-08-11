const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const Word = sequelize.define('words', {
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
});

module.exports = Word;
