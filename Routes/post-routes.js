const express = require('express');
const router = express.Router();
const faker = require('faker');
const sequelize = require('../DB connection/connection');
const User = require("../Model/User");
const Post = require('../Model/Post');

// for(let i = 0; i < 50; i++){
//     if(i < 20){
//         Post.create({
//             post_text: faker.lorem.sentences(),
//             user_id: 1
//         }).then(res => {
//             console.log("done");
//         }).catch(err => console.log(err.message));
//     }
//     if(i>19 & i<35){
//         Post.create({
//             post_text: faker.lorem.sentences(),
//             user_id: 2
//         }).then(res => {
//             console.log("done");
//         }).catch(err => console.log(err.message));
//     }
//     if(i>34){
//         Post.create({
//             post_text: faker.lorem.sentences(),
//             user_id: 3
//         }).then(res => {
//             console.log("done");
//         }).catch(err => console.log(err.message));
//     }
// }

router.get('/postGet', (req, res) => {
    Post.findAll().then(result => {
        console.log(result);
        res.send(result);
    }).catch(err => console.log(err.message));
})

router.get('/userGet', (req, res) => {
    User.findAll().then(result => {
        console.log(result);
        res.send(result);
    }).catch(err => console.log(err.message));
})

router.post('/post', (req, res) => {
    Post.create({
        post_text: req.body.text,
        user_id: userId
    }).then(result => {
        console.log(result);
    }).catch(err => console.log(err.message));
})

module.exports = router;