const express = require('express');

const sequelize = require('./util/db');
const User = require('./models/users');
const Word = require('./models/words');
const UserWords = require('./models/user_words');

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('hey');
});

app.listen(port, () => {
    console.log(`express listening on port ${port}`);
});

sequelize.sync({ force: false }).then();
