const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

//connecting to the database 
const connection = require('./DB connection/connection');

const app = express();
const port = process.env.PORT || 5000; //step 1 - initialize port
const routes = require('./Routes/Routes');
const Post = require('./Model/Posts');
const Like = require('./Model/Like');
const User = require('./Model/User');

dotenv.config()

// data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//step 3

app.use('/api', routes);

//adding associations of tables
User.hasMany(Post);
Post.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Comment);
Comment.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
Post.hasMany(Comment);
Comment.belongsTo(Post, {constraints: true, onDelete: 'CASCADE'});
Post.hasMany(Like);
Like.belongsTo(Post, {constraints: true, primaryKey: true});
User.hasMany(Like);
Like.belongsTo(User, {constraints: true, primaryKey: true});

sequelize
    .sync()
    .then(result => {
        app.listen(port, () => console.log(`listening on the port ${port}`));
    })
    .catch(err => {
        console.log(err)
    });

