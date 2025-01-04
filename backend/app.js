const express = require('express');
const app = express();
const data = require('./data.js');
const cors= require('cors');
const mongoose = require('mongoose');
const {mongoUrl} = require('./keys.js');
PORT = 5000;



app.use(cors());
require("./models/model.js");
require("./models/post.js");
app.use(express.json());
app.use(require ('./Routes/auth.js'));
app.use(require ('./Routes/CreatePost.js'));
mongoose.connect(mongoUrl);

mongoose.connection.on('connected', () => { 
  console.log('Connected to MongoDB');
}); 



mongoose.connection.on('error', () => { 
  console.log('Not connect  to MongoDB');
}); 

app.get('/', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 