const express = require('express');
const Router = express.Router();
const Comment = require('../Model/Comment');
const faker = require('faker');

// for(let i = 0; i < 50; i++){
//     if(i < 20){
//         Comment.create({
//             comment_text: faker.lorem.sentence(),
//             user_id: 1,
//             post_id: i
//         }).then(res => {
//             console.log("done");
//         }).catch(err => console.log(err.message));
//     }
//     if(i>19 & i<35){
//         Comment.create({
//             comment_text: faker.lorem.sentence(),
//             user_id: 2,
//             post_id: i
//         }).then(res => {
//             console.log("done");
//         }).catch(err => console.log(err.message));
//     }
//     if(i>34){
//         Comment.create({
//             comment_text: faker.lorem.sentence(),
//             user_id: 3,
//             post_id: i
//         }).then(res => {
//             console.log("done");
//         }).catch(err => console.log(err.message));
//     }
// }

Router.get('/comment', (req, res) => {
    Comment.findAll().then(result => {
        res.send(result);
    })
})

Router.post('/comment', (req, res) => {
    Comment.create({
        user_id: userId,
        post_id: postId,
        comment_text: req.body.commentText
    }).then(result => {
        console.log(result);
    }).catch(err => console.log(err.message));
})

module.exports = Router;