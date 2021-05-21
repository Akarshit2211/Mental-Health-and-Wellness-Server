const mysql = require('mysl2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process{
    dialect: 'mysql',

})