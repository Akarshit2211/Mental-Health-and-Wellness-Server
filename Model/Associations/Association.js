const sequelize = require('../../DB connection/connection');
const User = require('../User');
const Post = require('../Post');
const Comment = require('../Comment');
const Like = require('../Like');

const associations = () => {
    //adding associations of tables
    Post.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
    User.hasMany(Post);
    Comment.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
    User.hasMany(Comment);
    Comment.belongsTo(Post, {constraints: true, onDelete: 'CASCADE'});
}

module.exports =  associations;
