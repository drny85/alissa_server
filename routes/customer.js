const express = require('express');
const {
    check
} = require('express-validator/check');

const router = express.Router();

const customerController = require('../controllers/customer');

router.post('/new', [check('email').trim().isEmail().withMessage('Please enter a valid email.')], customerController.addCustomer);

router.get('/get/:id', customerController.getCustomerById);



module.exports = router;