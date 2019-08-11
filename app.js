const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/db');
const User = require('./models/users');
const Word = require('./models/words');
const UserWords = require('./models/user_words');

const app = express();
const port = 3000;

/** routers */
const authRouter = require('./routes/auth');

/** Body parser middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('hey');
});

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`express listening on port ${port}`);
});

sequelize.sync({ force: false }).then();
