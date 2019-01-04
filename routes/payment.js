const express = require('express');
const {
    check
} = require('express-validator/check');
const router = express.Router();
const paymentController = require('../controllers/payment');

router.post('/charge', paymentController.chargeCustomer);



module.exports = router;