//likes
const Sequelize = require('sequelize');
const sequelize = require('../DB connection/connection');

const Like = sequelize.define('likes', {
    liked_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
})

module.exports = Like;