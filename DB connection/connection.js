const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    multipleStatements: true
});


module.exports = sequelize;




// const sequelize = new Sequelize('mentalhealthsocialdb', 'root', 'Onepunchman', {
//     dialect: 'mysql',
//     host: 'localhost',
//     multipleStatements: true
// });
