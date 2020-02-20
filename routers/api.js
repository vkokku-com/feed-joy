const express = require('express');
const router = express.Router();
const User_Details = require('../models/user_details');
const Ngo_Deatails = require('../models/ngo_details');
const Transactions = require('../models/transactions');

router.get('/user_details', async function (req, res, next) {

    try {
        let _user_details;
        if (req.query.phone_num) {
            _user_details = await User_Details.find({ phone_num: req.query.phone_num })
        }
        else {
            _user_details = await User_Details.find({})
        }

        res.send(_user_details);
    }
    catch (error) {
        next(error);
    }
});

router.post('/user_details', async function (req, res, next) {
    try {
        const _user_details = await User_Details.create(req.body)
        res.send(_user_details);
    }
    catch (error) {
        next(error);
    }
});

router.get('/ngo_details', async function (req, res, next) {
    try {
        let _ngo_details;
        if(req.query.phone_num){
            _ngo_details = await Ngo_Deatails.find({phone_num:req.query.phone_num})
        }
        else{
            _ngo_details = await Ngo_Deatails.find({})
        }
        res.send(_ngo_details);
    }
    catch (error) {
        next(error);
    }
});

router.post('/ngo_details', async function (req, res, next) {
    try {
        const _ngo_details = await Ngo_Deatails.create(req.body)
        res.send(_ngo_details);
    }
    catch (error) {
        next(error);
    }
});

router.get('/transactions', async function (req, res, next) {
    try {
        let _trans = [];
        if (!req.query.trans_id && !req.query.status && !req.query.ngo_phone && !req.query.user_phone) {
            _trans = await Transactions.find({});
        }
        else if (req.query.trans_id) {
            let _trans_by_id = await Transactions.findById(req.query.trans_id);
            let _user = await User_Details.findById(_trans_by_id.user_id);
            _trans.push({
                trans_details: _trans_by_id,
                user_details: _user
            })
        }

        else if (req.query.status) {
            let _trans_array = await Transactions.find({ transaction_accepted: req.query.status });
            for (let i = 0; i < _trans_array.length; i++) {
                let _user_for_trans = await User_Details.findById(_trans_array[i].user_id);
                _trans.push({
                    trans_details: _trans_array[i],
                    user_details: _user_for_trans
                });
            }
        }
        else if (req.query.ngo_phone) {
            let _ngo_detail = await Ngo_Deatails.find({ phone_num: req.query.ngo_phone });
            let _trans_for_ngo = await Transactions.find({ ngo_id: _ngo_detail[0]._id })
            _trans.push({
                trans_details: _trans_for_ngo,
                ngo_details: _ngo_detail
            })
        }

        else if (req.query.user_phone) {
            let _user_detail = await User_Details.find({ phone_num: req.query.user_phone });
            let _trans_for_user = await Transactions.find({ user_id: _user_detail[0]._id })
            _trans.push({
                trans_details: _trans_for_user,
                user_details: _user_detail
            })
        }


        res.send(_trans);
    }
    catch (error) {
        next(error);
    }
});

router.post('/transactions', async function (req, res, next) {
    try {
        const _trans = await Transactions.create(req.body)
        res.send(_trans);
    }
    catch (error) {
        next(error);
    }
});

router.post('/transactions/change_status', async function (req, res, next) {
    try {
        if (req.body.trans_id) {
            let _updated_transaction = await Transactions.findByIdAndUpdate({ _id: req.body.trans_id }, { transaction_accepted: req.body.status }, { new: true });
            res.send(_updated_transaction);
        }
        else {
            next('Transaction id and Status is required');
        }
    }
    catch (error) {
        next(error);
    }
});


router.post('/transactions/rating', async function (req, res, next) {
    try {
        //rating 
        res.send(_trans);
    }
    catch (error) {
        next(error);
    }
});

module.exports = router;