const mysqlConnection = require('../DB connection/connection');
const faker = require('faker');
const bcrypt = require('bcrypt');
const validate = require('express-validator');
const saltRounds = 10;

const createNewUser = (req, res) => {

    let errors = [];
    let validationErrors = validate.validationResult(req);
    if(validationErrors.isEmpty()){
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            var userdata = {
                first_name: req.body.firstName, 
                last_name: req.body.lastName, 
                email_id: req.body.email, 
                dob: "1998-11-22",
                gender: req.body.gender,
                username: faker.internet.userName(),
                password: hash
            };
        
            mysqlConnection.query('INSERT INTO users SET ?', userdata, (err, result) => {
                if (err) throw err;
            })
        })
    }
    else{
        console.log(validationErrors);
    }
    
};

module.exports = createNewUser;