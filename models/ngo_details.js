const mongoose = require('mongoose');

var Ngo_Details_Schema = new mongoose.Schema({
    name: String,
    registration_number:String,
    phone_num: { type: String, unique: true},
    type:{type:Boolean, default:false},
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
},{timestamps : true});

 var Ngo_Details =mongoose.model('ngo_detail',Ngo_Details_Schema);
 module.exports =Ngo_Details;