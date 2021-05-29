const express = require('express');
const Like = require('../Model/Like');
const Router = express.Router();

Router.get('/likes', (req, res) => {
    Like.findAll().then(result => {
        res.send(result);
    })
})

Router.post('/like', (req, res) => {
    Like.create({
        post_id: postId,
        user_id: userId
    }).then(result => {
        console.log(result);
    }).catch(err => console.log(err.message));
})

module.exports = Router;
