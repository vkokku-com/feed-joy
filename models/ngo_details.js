
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ngo_details = new Schema({
    name: String,
    registration_number:String,
    phone_num: { type: String, unique: true},
    type:String,
    email:String,
    address:String,
    fb_link:String,
    twitter_link:String,
    insta_link:String,
    nature_work:Array,
    website:String,
    rating:Number,
    landmark:String,
    photo:String,
    testimonial:String
});

module.exports =ngo_details;