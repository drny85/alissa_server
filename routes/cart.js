const express = require('express');

const router = express.Router();


const cartController = require('../controllers/cart');

router.get('/', cartController.createCart);

router.post('/add/:id', cartController.addToCart);

router.get('/:id', cartController.getCartById);

router.post('/test', cartController.textCart);


module.exports = router;