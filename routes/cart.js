const express = require('express');

const router = express.Router();


const cartController = require('../controllers/cart');
//END POINT TO CREATE CART.


router.post('/add/:cartId', cartController.addToCart);

router.get('/:id', cartController.getCartById);

router.post('/test', cartController.textCart);

router.post('/create', cartController.createCart);

router.put('/update/:cartId', cartController.deleteFromCart);


module.exports = router;