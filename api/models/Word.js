const Sequelize = require('sequelize');
const sequelize = require('../config/db');

/**
 * The following model defines the word schema
 * @word_id         : id of @word
 * @word            : word to be learned
 * @word_meaning    : translation of the @word to be learned
 * @word_note       : optional node which can be added to the word
 * @lang_id         : language of @word (added through model associations, see app.js)
 * @user_id         : the user that created the @word (added through model associations, see app.js)
 * @times_reviewed  : number of times @word has been reviewed
 * @times_correct   : number of times @word was reviews correctly
 * @times_incorrect : number of times @word was reviewed incorrectly
 * @spelling_error  : the degree of spelling errors made for this word
 * @created_at      : time user is created (auto-generated)
 * @updated_at      : time user is updated (auto-generated)
 *
 * The @word_meaning can containing multiple definitions seperated by ','
 * the meanings will be used when reviewing a word by string matching
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
            allowNull: false
        },
        word_meaning: {
            type: Sequelize.STRING,
            allowNull: false
        },
        word_note: {
            type: Sequelize.STRING,
            allowNull: true
        },
        times_reviewed: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        times_correct: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        times_incorrect: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        spelling_error: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    },
    { underscored: true, charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' }
);

module.exports = Word;
