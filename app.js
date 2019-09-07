const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const sequelize = require('./config/db');

// import models
const User = require('./models/User');
const Word = require('./models/Word');
const Language = require('./models/Language');
const Category = require('./models/Category');

// adds foreign key "language_id" to words table
Language.hasMany(Word, { foreignKey: 'language_id' });
// adds foreign key "user_id" to words table
User.hasMany(Word, { foreignKey: 'user_id', onDelete: 'cascade' });
// create bridge table between categories and words
Category.belongsToMany(Word, {
    through: 'WordCategory',
    foreignKey: 'category_id',
    onDelete: 'cascade'
});
Word.belongsToMany(Category, {
    through: 'WordCategory',
    foreignKey: 'word_id',
    onDelete: 'cascade'
});

const app = express();
const port = 5000;

/** routers */
const authRouter = require('./routes/auth');
const wordsRouter = require('./routes/words');
const profileRouter = require('./routes/profile');
const categoryRouter = require('./routes/category');
const languageRouter = require('./routes/language');

/** Body parser middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Passport middleware & config */
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/auth', authRouter);
app.use('/words', wordsRouter);
app.use('/profile', profileRouter);
app.use('/category', categoryRouter);
app.use('/language', languageRouter);

app.listen(port, () => {
    console.log(`express listening on port ${port}`);
});

sequelize.sync({ force: false }).then();
