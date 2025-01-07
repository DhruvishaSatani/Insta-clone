const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../Middleware/requireLogin");
const { route } = require("./auth");
const POST = mongoose.model("POST")


// Route
router.post("/createpost", requireLogin, (req, res) => {
    const { body, pic } = req.body;
    console.log(pic)
    if (!body || !pic) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    res.json("okk")
    // console.log(req.user)
    // const post = new POST({
    //     body,
    //     photo: pic,
    //     postedBy: req.user
    // })
    // post.save().then((result) => {
    //     return res.json({ post: result })
    // }).catch(err => console.log(err))
})



// router.get("/allposts", requireLogin, (req, res) => {
//     POST.find()
//         .populate("postedBy", "_id name Photo")
//         .populate("comments.postedBy", "_id name")
//         .sort("-createdAt")
//         .then(posts => res.json(posts))
//         .catch(err => console.log(err))
// })

module.exports = router;