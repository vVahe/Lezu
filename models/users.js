const Sequelize = require('sequelize');
const sequelize = require('../util/db');

/**
 * Define users table
 * created_at & updated_at columns automatically added by ORM
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
