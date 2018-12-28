const express = require('express');

const router = express.Router();

const emailControllers = require('../controllers/email');

router.post('/send', emailControllers.sendEmail)



module.exports = router;