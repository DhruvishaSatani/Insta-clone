const e = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const USER = mongoose.model("USER");
const bcrypt = require('bcrypt');

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
                res.json({message: "Successfully posted"})})
            .catch(err =>{console.log(err);
            } )
        })
        
    })    
    // res.json({message: "Successfully posted"});

   
});



module.exports = router;