const Sequelize = require('sequelize');

const sequelize = new Sequelize('word_trainer', 'root', 'iowe8923', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;
