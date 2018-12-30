const express = require('express');

const router = express.Router();


const cartController = require('../controllers/cart');
//END POINT TO CREATE CART.
router.post('/', cartController.createCart);

router.post('/add', cartController.addToCart);

router.get('/:id', cartController.getCartById);

router.post('/test', cartController.textCart);


module.exports = router;