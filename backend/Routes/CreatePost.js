const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../Middleware/requireLogin");
// const { route } = require("./auth");
const POST = mongoose.model("POST")



// Route
// router.post("/createpost", requireLogin, (req, res) => {
    
//    const { title, body} = req.body;
//    if (!title || !body) {
//        return res.status(422).json({ error: "Please add all the fields" })
//    }
//    res.user 

//    res.json( "Successfully posted");
//    console.log(req.user)
//    const post = new POST({
//        body,
//        photo: pic,
//        postedBy: req.user
//    })
//    post.save().then((result) => {
//        return res.json({ post: result })
//    }).catch(err => console.log(err))
// })

router.post("/createpost", requireLogin, (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(422).json({ error: "Please add all the fields" });
    }

    // Ensure user is authenticated
    console.log('Authenticated user:', req.user);

    const post = new POST({
        title,
        body,
        postedBy: req.user // This is the authenticated user
    });

    post.save().then((result) => {
        return res.json({ post: result });
    }).catch((err) => {
        console.log('Error while saving post:', err);
        return res.status(500).json({ error: "Failed to create post" });
    });
});




module.exports = router;