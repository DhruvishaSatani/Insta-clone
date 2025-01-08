const jwt = require("jsonwebtoken");
const {  Jwt_secret } = require("../keys");
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

// module.exports = (req, res, next) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//       return res.status(401).json({ error: "You must have logged in 1" })
//   }
//   const token = authorization.replace("Bearer ", "")
//   jwt.verify(token, Jwt_secret, (err, payload) => {
//       if (err) {
//           return res.status(401).json({ error: "You must have logged in 2" })
//       }
//       const { _id } = payload
//       USER.findById(_id).then(userData => {
//           req.user = userData
//           next()
//       })
//   })

// }

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
      return res.status(401).json({ error: "You must have logged in 1" })
  }

  const token = authorization.replace("Bearer ", "");
  console.log('Received Token:', token);  // Debug line to see the token

  jwt.verify(token, Jwt_secret, (err, payload) => {
      if (err) {
          console.log('Error in token verification:', err);  // Debug line to check the error
          return res.status(401).json({ error: "You must have logged in 2" })
      }
      
      const { _id } = payload;
      USER.findById(_id).then(userData => {
          req.user = userData;
          next();
      }).catch(error => {
          console.log('Error fetching user:', error);  // Debug line to check if the user is fetched correctly
          return res.status(401).json({ error: "You must have logged in 3" });
      });
  });
}

