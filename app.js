const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Connects to Mongo Db
mongoose.connect('mongodb://localhost:27017/FeedJoy', {useNewUrlParser: true},function(error){
    if(error) console.log(error);
    console.log("connection successful");
});

app.use('/api', require('./routers/api.js'));

app.use(function(err,req,res,next){
    res.status(400).send({error:err.message});
});

app.listen(3000);
console.log('Server is running on port 3000');
