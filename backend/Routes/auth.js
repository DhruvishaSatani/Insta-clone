const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const USER = mongoose.model("USER");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {jwt_secret} = require('../keys.js');
// const requireLogin = require("../middlewares/requireLogin");

router.get('/', (req, res) => {
    res.send("Hello World");
}   );



router.post('/signup', (req, res) => {
   
    const{name,username,email,password} = req.body;
    if (!name || !email || !username || !password) {
        return res.status(422).json({ error: "Please add all the fields" })
    }

    USER.findOne({ $or: [{ email: email }, { username: username }] }).then((savedUser) => {

        if (savedUser) {
            return res.status(422).json({ error: "User already exist with that email or userName" })
        }

        bcrypt.hash(password, 12).then((hashedPassword) => {
            const user = new USER({
                name,
                email,
                username,
                password:hashedPassword
            });
            user.save()
            .then(user => {
                res.json({message: "Successfully signed up"})})
            .catch(err =>{console.log(err);
            } )
        })
        
    })    
    // res.json({message: "Successfully posted"});

   
});





router.post('/signin', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    USER.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid Email or Password" });
        }

        console.log(savedUser);

        bcrypt.compare(password, savedUser.password).then((match) => {
            if (match) {
                // Generate JWT token
                const token = jwt.sign({ _id: savedUser.id }, jwt_secret);
                console.log(token);

                // Destructure user data
                const { _id, name, email, userName } = savedUser;

                // Send response only once with token and user details
                res.json({
                    token,
                    user: { _id, name, email, userName }
                });

                console.log({ token, user: { _id, name, email, userName } });
                return;

            } else {
                return res.status(422).json({ error: "Invalid Email or Password" });
            }
        }).catch(err => console.log(err));
    });
});





module.exports = router;