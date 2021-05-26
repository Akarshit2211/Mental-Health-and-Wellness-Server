const Sequelize = require('sequelize');

const sequelize = new Sequelize('mentalhealthsocialdb', 'root', 'Onepunchman', {
    dialect: 'mysql',
    host: 'localhost',
    multipleStatements: true
});

module.exports = sequelize;