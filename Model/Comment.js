const Sequelize = require('sequelize');
const sequelize = require('../DB connection/connection');

const Comment = sequelize.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'posts',
            key: 'id'
        }
    },
    comment_text: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    commented_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW()
    }
},{
    timestamps: false
}
)

module.exports = Comment;