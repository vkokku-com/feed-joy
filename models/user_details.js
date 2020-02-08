const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var user_details = new Schema({
    name: String,
    phone_num: { type: String, unique: true},
    type:String,
    email:String,
    DOB:Date,
    photo:String
});

module.exports =user_details;