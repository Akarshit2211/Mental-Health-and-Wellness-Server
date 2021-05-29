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
//             user_id: 5
//         }).then(res => {
//             console.log("done");
//         }).catch(err => console.log(err.message));
//     }
//     if(i>34){
//         Post.create({
//             post_text: faker.lorem.sentences(),
//             user_id: 6
//         }).then(res => {
//             console.log("done");
//         }).catch(err => console.log(err.message));
//     }
// }

router.get('/postGet', (req, res) => {
    Post.findAll().then(result => {
        let posts = result;
        res.send(posts);
    })
    User.findAll().then(result => {
        let users = result;
        res.send(users);
    })
})

router.post('/post', (req, res) => {
    
})

module.exports = router;