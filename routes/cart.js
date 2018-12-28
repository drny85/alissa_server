const express = require('express');

const router = express.Router();


const cartController = require('../controllers/cart');

router.get('/', cartController.createCart);

router.post('/createCart', cartController.addToCart);

router.get('/:id', cartController.getCartById);


module.exports = router;