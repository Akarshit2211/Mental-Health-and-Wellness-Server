const validate = require('express-validator');
const mysqlConnection = require('../DB connection/connection');

let validateUser = [
    validate.check("password", "enter the password").isLength({min: 8})
]

module.exports = validateUser;