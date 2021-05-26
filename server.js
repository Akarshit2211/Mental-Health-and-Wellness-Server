const express = require('express');
const bodyParser = require('body-parser');
const associations = require('./Model/Associations/Association');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const sequelize = require('./DB connection/connection');
const app = express();
const port = process.env.PORT || 5000; //step 1 - initialize port
const User = require('./Model/User');
const authUrls = require('./Routes/auth-routes');
const passportLocalStrategies = require('./Passport/Passport');

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//using cookie parser
cookieParser();

//creating a session middleware
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize()); //initializing passport
app.use(passport.session()); //specifying that passport will handle the sessions

//local passport strategies
passportLocalStrategies(passport, User);

//Routes
app.use('/api/' ,authUrls);

//adding associations between tables
associations();

//creating tables if not exist
sequelize.sync().then(result => {
    console.log("done");
}).catch(err => {
    console.log(err);
});

app.listen(port, () => console.log(`listening on the port ${port}`));



