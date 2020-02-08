const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const user_details =require('./models/user_details')
const ngo_details =require('./models/ngo_details')

var User_detail = mongoose.model('User_detail', user_details,'user_details');
var Ngo_detail = mongoose.model('Ngo_detail', ngo_details,'ngo_details');

//Connects to Mongo Db
mongoose.connect('mongodb://localhost:27017/FeedJoy', {useNewUrlParser: true},function(error){
    if(error) console.log(error);
    console.log("connection successful");
});

async function _CreateCollections(){
    try{
        await User_detail.createCollection();
        await Ngo_detail.createCollection(); 
    }
    catch(error){
        console.log(error);
    }
}

_CreateCollections();

app.listen(3000);
console.log('Server is running on port 3000');


app.get('/api/user_details', function (req, res) {   
    User_detail.find({} , function (error, response) {
        if(error){
            res.status(400).send(error);
        }
        else{
            res.status(200).send(response);
        }
      });
  })


app.post('/api/user_details', function (req, res) {
    User_detail.create(req.body , function (error, response) {
        if(error){
            res.status(400).send(error);
        }
        else{
            res.status(200).send(response);
        }
      });
  });

  
app.get('/api/ngo_details', function (req, res) {
    Ngo_detail.find({} , function (error, response) {
        if(error){
            res.status(400).send(error);
        }
        else{
            res.status(200).send(response);
        }
      });
  })


app.post('/api/ngo_details', function (req, res) {
    Ngo_detail.create(req.body , function (error, response) {
        if(error){
            res.status(400).send(error);
        }
        else{
            res.status(200).send(response);
        }
      });
  });
