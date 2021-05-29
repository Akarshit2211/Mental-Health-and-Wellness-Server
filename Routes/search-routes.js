const express = require('express');
const Router = express.Router();
const User = require('../Model/User');
const Sequelize = require('sequelize');
const { response } = require('express');
const Op = Sequelize.Op;

Router.get('/likeUsers', (req, res) => {
    User.findAll({where: {
        username: {
            [Op.like]: '%' + req.body.search + '%'
        }
    }}).then(result => {
        res.send(result);
    }).catch(err => console.log(err.message));
})

Router.get('/selectedUser', (req, res) => {
    User.findOne({where: {
        username: req.body.selectedUser
    }}).then(result => {
        res.send(result);
    }).catch(err => console.log(err.message));
})

module.exports = Router;