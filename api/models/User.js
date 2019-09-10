const Sequelize = require('sequelize');
const sequelize = require('../config/db');

/**
 * The following model defines the user schema
 * @user_id     : id of the user
 * @first_name  : first name of the user
 * @last_name   : last name of the user
 * @username    : username of the user
 * @email       : email of the user
 * @password    : password of the user (hashed)
 * @created_at  : time user is created (auto-generated)
 * @updated_at  : time user is updated (auto-generated)
 */
const User = sequelize.define(
    'users',
    {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    { underscored: true }
);

module.exports = User;
