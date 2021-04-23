const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
require('dotenv/config');

const app = express();


app.use(bodyParser.json());

//Routes
const postsRoute = require('./routes/posts');


//Middleware
app.use('/posts',  postsRoute )

//MongoDB
mongoose.connect(process.env.DB_CONNECTION , ()=>{
   console.log('connected to DB!');
});


app.listen(3000, () => {
   console.log("Server Up and running.");
});