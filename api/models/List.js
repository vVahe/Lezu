const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./User');

/**
 * The following model defines the lists schema
 * @list_id    : id of the list
 * @list_name  : list name
 * @user_id  : user the list belongs to (added through model associations, see app.js)
 * Users can have one or more lists
 */
const List = sequelize.define(
    'lists',
    {
        list_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        list_name: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        }
    },
    { timestamps: false }
);

module.exports = List;
