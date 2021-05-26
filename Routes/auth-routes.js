const express = require('express');
const passport = require('passport');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}))



router.get('/signup', (req, res) => {
    res.send("<h1>signup page</h1>")
})

router.post('/signup', passport.authenticate('localSignup'), (req, res) => {
    res.send(user);
    res.send("<h1>signed up</h1>");
})

router.post('/login', passport.authenticate('localLogin'), (req, res) => {
    console.log(user);
    res.send(user);
    res.send("<h1>logged in</h1>");
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) throw err;
        else {res.redirect('http://localhost:3000/')};
    })
})

module.exports = router;