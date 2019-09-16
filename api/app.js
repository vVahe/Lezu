const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const sequelize = require('./config/db');

// import models
const User = require('./models/User');
const Word = require('./models/Word');
const Language = require('./models/Language');
const List = require('./models/List');

// adds foreign key "language_id" to words table
Language.hasMany(Word, { foreignKey: 'language_id' });
// adds foreign key "user_id" to lists table, list will be deleted if user is deleted
User.hasMany(List, { foreignKey: 'user_id', onDelete: 'cascade' });
// adds foreign key "user_id" to words table, word will be deleted if user is deleted
User.hasMany(Word, { foreignKey: 'user_id', onDelete: 'cascade' });
// create bridge table between lists and words
List.belongsToMany(Word, {
    through: 'words_lists',
    foreignKey: 'list_id',
    onDelete: 'cascade'
});
Word.belongsToMany(List, {
    through: 'words_lists',
    foreignKey: 'word_id',
    onDelete: 'cascade'
});

const app = express();
const port = process.env.PORT || 5000;

/** routers */
const authRouter = require('./routes/auth');
const listRouter = require('./routes/list');
const languageRouter = require('./routes/language');
const wordsModifyRouter = require('./routes/words-modify');
const wordsRetrieveRouter = require('./routes/words-retrieve');
const statsRouter = require('./routes/stats');

/** Body parser middleware */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Passport middleware & config */
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/auth', authRouter);
app.use('/language', languageRouter);
app.use('/words-modify', wordsModifyRouter);
app.use('/words-retrieve', wordsRetrieveRouter);
app.use('/lists', listRouter);
app.use('/stats', statsRouter);

app.listen(port, () => {
    console.log(`express listening on port ${port}`);
});

// automatically create tables based on models
sequelize.sync({ force: false }).then();

// check for db connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
