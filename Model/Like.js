//likes
const Sequelize = require('sequelize');
const sequelize = require('../DB connection/connection');

const Like = sequelize.define('likes', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    liked_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
})

module.exports = Like;