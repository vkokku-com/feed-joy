const mongoose = require('mongoose');

var Transactions_Schema = new mongoose.Schema({
    quantity: {type:Number, required:true},
    description: String,
    location: String,
    address: String,
    transaction_num: { type: String},
    user_id: {required:true,type: 'ObjectId', ref: 'User_Details'},
    ngo_id: {required:true, type: 'ObjectId', ref: 'Ngo_Deatails'},
    transaction_accepted:{type:Boolean, default:false},

},{timestamps : true});

 var Transactions_Details =mongoose.model('transaction',Transactions_Schema);

 module.exports =Transactions_Details;