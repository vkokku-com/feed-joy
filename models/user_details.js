const mongoose = require('mongoose');

var User_Details_Schema = new mongoose.Schema({
    name: String,
    phone_num: { type: String, unique: true},
    type:String,
    email:String,
    DOB:Date,
    photo:String
},{timestamps : true});

var User_Details =mongoose.model('user_detail',User_Details_Schema);
module.exports =User_Details;