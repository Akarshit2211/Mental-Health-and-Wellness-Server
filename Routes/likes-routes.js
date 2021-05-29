const express = require('express');
const Like = require('../Model/Like');
const Router = express.Router();

Router.get('/likes', (req, res) => {
    Like.findAll().then(result => {
        res.send(result);
    })
})

Router.post('/like', (req, res) => {
    
})

module.exports = Router;
