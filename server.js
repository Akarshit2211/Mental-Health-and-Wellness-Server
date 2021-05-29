const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const sequelize = require('./DB connection/connection');
const app = express();
const port = process.env.PORT || 5000; //step 1 - initialize port
const User = require('./Model/User');
const commentRoutes = require('./Routes/comment-routes');
const likesRoutes = require('./Routes/likes-routes');
const authUrls = require('./Routes/auth-routes');
const postRoutes = require('./Routes/post-routes');
const passportLocalStrategies = require('./Passport/Passport');
const cors = require('cors');

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

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
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', likesRoutes);

//creating tables if not exist
sequelize.sync({force: false}).then(result => {
    console.log("done");
}).catch(err => {
    console.log(err);
});

app.listen(port, () => console.log(`listening on the port ${port}`));



