const bcrypt = require('bcrypt');
const faker = require('faker');
const LocalStrategy = require('passport-local').Strategy;
const saltRounds = 10;

const localStrategies = (passport, User) => {

    //SIGNUP STRATEGY
    passport.use('localSignup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, username, password, done){
            console.log(req);
            console.log(username);
            console.log(faker.internet.UserName);
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
                        gender: req.body.gender,
                        email_id: username,
                        username: 'ranjan1112',
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
            })
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

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findOne({where: {id: id}}).then(user => {
            done(null,user);
        }).catch(err => done(err));
    })

    const isLoggedIn = (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('http://localhost:3000/');
    }
}

module.exports = localStrategies;