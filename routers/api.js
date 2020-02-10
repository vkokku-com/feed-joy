const express = require('express');
const router =express.Router();
const User_Details = require('../models/user_details');
const Ngo_Deatails =require('../models/ngo_details');
const Transactions =require('../models/transactions');

router.get('/user_details',async function (req, res,next) {
    try{
        const _user_details =await User_Details.find({})
        res.send(_user_details);
    }
    catch(error){
        next(error);
    }
});

router.post('/user_details', async function (req, res,next) {
    try{
        const _user_details =await User_Details.create(req.body)
        res.send(_user_details);
    }
    catch(error){
        next(error);
    }
});

router.get('/ngo_details', async function (req, res, next) {
    try{
        const _ngo_details =await Ngo_Deatails.find({})
        res.send(_ngo_details);
    }
    catch(error){
        next(error);
    }
});

router.post('/ngo_details',async function (req, res, next) {
    try{
        const _ngo_details =await Ngo_Deatails.create(req.body)
        res.send(_ngo_details);
    }
    catch(error){
       next(error);     
    }
});

router.get('/transactions',async function (req, res,next) {
    try{
        const _trans =await Transactions.find({})
        res.send(_trans);
    }
    catch(error){
        next(error);
    }
});

router.post('/transactions',async function (req, res,next) {
    try{
        const _trans =await Transactions.create(req.body)
        res.send(_trans);
    }
    catch(error){
        next(error);
    }
});

router.post('/transactions/change_status',async function (req, res,next) {
    try{
        //Change the ststus 
        res.send(_trans);
    }
    catch(error){
        next(error);
    }
});


router.post('/transactions/rating',async function (req, res,next) {
    try{
        //rating 
        res.send(_trans);
    }
    catch(error){
        next(error);
    }
});

module.exports =router;