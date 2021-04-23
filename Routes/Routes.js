const express = require('express');
const router = express.Router();

router.route('/something').get((req,res) => {
    res.send("just checking")
}).post((req, res) =>{
    console.log('post route checking')
})







module.exports = router