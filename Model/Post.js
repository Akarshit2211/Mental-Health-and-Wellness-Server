//post
const Sequelize = require('sequelize');
const sequelize = require('../DB connection/connection');

const Post = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // user_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    post_text: {
        type: Sequelize.TEXT
    },
    image_url: {
        type: Sequelize.STRING,
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Post;