const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const sequelize = require('./util/db');

const app = express();
const port = 3000;

/** routers */
const authRouter = require('./routes/auth');

/** Body parser middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Passport middleware */
app.use(passport.initialize());
/** Passport config */
require('./util/passport')(passport);

app.use('/auth', authRouter);

app.listen(port, () => {
    console.log(`express listening on port ${port}`);
});

sequelize.sync({ force: false }).then();
