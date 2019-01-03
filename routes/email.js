const express = require('express');
const {
    check
} = require('express-validator/check');
const router = express.Router();


const emailControllers = require('../controllers/email');

router.post('/send', [check('email').isEmail().trim().withMessage('Please enter a valid email')], emailControllers.sendEmail)



module.exports = router;