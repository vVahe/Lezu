const mysqlHost = require('./keys').mysqlHost;
const mysqlUser = require('./keys').mysqlUser;
const mysqlPassword = require('./keys').mysqlPassword;
const mysqlDatebase = require('./keys').mysqlDatabase;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(mysqlDatebase, mysqlUser, mysqlPassword, {
    host: mysqlHost,
    dialect: 'mysql',
    dialectOptions: {
        insecureAuth: true
    },
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;
