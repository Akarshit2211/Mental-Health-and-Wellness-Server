const express = require('express');
const router = express.Router();
const faker = require('faker');
const mysqlConnection = require('../DB connection/connection');

router.get('/something', (req, res, next) => {
    res.send('<h1>loading</h1>');
})

router.post("/login", (req, res, next) => {
    console.log(req.body);
    res.send("<h1>data sent</h1>");
})  

router.post("/signup", (req, res, next) => {
    console.log(req.body);
    res.send(req.body);
    var userdata = {
        first_name: req.body.firstName, 
        last_name: req.body.lastName, 
        email_id: req.body.email, 
        dob: "1998-11-22",
        gender: req.body.gender,
        username: faker.internet.userName()
    };

    mysqlConnection.query('INSERT INTO users SET ?', userdata, (err, result) => {
        if (err) throw err;
        console.log(result);
    })
})

module.exports = router;