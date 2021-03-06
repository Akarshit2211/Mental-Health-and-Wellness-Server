const bcrypt = require('bcrypt');
const faker = require('faker');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2');
const saltRounds = 10;

const localStrategies = (passport, User) => {

    let user;

    //SIGNUP STRATEGY
    passport.use('localSignup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, username, password, done){
            // console.log(req);
            console.log(username);
            console.log(faker.internet.userName);
            User.findOne({where: {email_id: username}}).then(user => {
                if(user){
                    return done(null, false, {message: 'Email already exists'});
                }
                if(!user){
                    let birthDate = [req.body.birthday_year, req.body.birthday_month, req.body.birthday_day].join('-');
                    let data = {
                        first_name: req.body.firstName,
                        last_name: req.body.lastName,
                        date_of_birth: birthDate,
                        gender: 'male',
                        email_id: username,
                        password: bcrypt.hashSync(password, saltRounds, function(err, hash){
                            return hash;
                        })
                    }
                    User.create(data).then(res => {
                        console.log(res);
                        if(res){
                            return done(null, res);
                        }
                        else{
                            return done(null, false, {message: 'user not created'});
                        }
                    })
                }
            }).catch(err=>console.log(err.message));
        }
    ));

    //LOGIN STRATEGY
    passport.use('localLogin', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, username, password, done){
            const validPassword = (enteredPass, userPass) => {
                bcrypt.compareSync(enteredPass, userPass, function(err, result){
                    return result;
                })
            }
            User.findOne({where: {email_id: username}}).then(user => {
                if(!user){
                    return done(null, false, {message: 'User does not exist'});
                }
                if(user){
                    if(!validPassword(password, user.password)){
                        return done(null, false, {message: 'Incorrect password!'});
                    }
                    return done(null, user);
                }
            }).catch(err => done(err));
        }
    ))

    //GOOGLE STRATEGY
    passport.use('google', new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:5000/api/googleLogin/loggedIn",
            userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
        },
        function(accessToken, refreshToken, profile, done){
            console.log(profile);
            User.findOne({where: {id: profile.id}}).then(user => {
                if(user){
                    return done(null, false, {message: 'user already exist'});
                }
                if(!user){
                    console.log(profile);
                }
            })
        }
    ))

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findOne({where: {id: id}}).then(user => {
            done(null,user);
        }).catch(err => done(err));
    })

    const isLoggedIn = (req, res, next) => {
        console.log(req.isAuthenticated());
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('http://localhost:3000/');
    }
}

module.exports = localStrategies;