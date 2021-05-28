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
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    posted_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW()
    }
},{
    timestamps: false
});

module.exports = Post;