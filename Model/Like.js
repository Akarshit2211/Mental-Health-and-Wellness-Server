//likes
const Sequelize = require('sequelize');
const sequelize = require('../DB connection/connection');

const Like = sequelize.define('likes', {
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'posts',
            key: 'id'
        }
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    liked_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW()
    }
},{
    timestamps: false
})

module.exports = Like;