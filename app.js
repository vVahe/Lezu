const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const sequelize = require('./util/db');

// import models
const User = require('./models/users');
const Word = require('./models/words');

//set model associations
User.belongsToMany(Word, {
    through: 'UserWords',
    foreignKey: 'user_id',
    onDelete: 'cascade'
});
Word.belongsToMany(User, {
    through: 'UserWords',
    foreignKey: 'word_id',
    onDelete: 'cascade'
});

const app = express();
const port = 3000;

/** routers */
const authRouter = require('./routes/auth');
const wordsRouter = require('./routes/words');

/** Body parser middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Passport middleware & config */
app.use(passport.initialize());
require('./util/passport')(passport);

app.use('/auth', authRouter);
app.use('/words', wordsRouter);

app.listen(port, () => {
    console.log(`express listening on port ${port}`);
});

sequelize.sync({ force: false }).then();
