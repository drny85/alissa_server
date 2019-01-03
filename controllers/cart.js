const SCart = require('../models/ShoppingCart');
const Program = require('../models/Program');
const Cart = require('../models/Cart');


exports.createCart = (req, res) => {
    const cart = new Cart({
        programs: [],
        totalPrice: 0,
        quantity: 0
    })

    cart.save()
        .then(cart => {

            res.json(cart)
        })
        .catch(err => console.log(err));
}

exports.addToCart = (req, res, next) => {

    const cartId = req.params.cartId;
    const _id = req.body._id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    let program = {
        _id: _id,
        name: name,
        description: description,
        price: price,
        image: image,
        quantity: 1
    };



    Cart.findById(cartId)
        .then(cart => {
            if (cart) {
                //cart found, update current cart..

                SCart.addToCart(program);
                cart.programs = SCart.programs,
                    cart.totalPrice = SCart.totalPrice,
                    cart.quantity = SCart.quantity
                console.log('Cart quantity:', SCart.quantity);

                return cart.save();
            }
        })
        .then(cart => {
            // console.log('Retured Cart:', cart);
            res.json({
                cart: cart,
                message: 'Program added to cart',
                totalItem: SCart.getTotalItem
            })
        })
        .catch(err => console.log(err));


}
//DELETE FROM CART FUNCTION 
exports.deleteFromCart = (req, res, next) => {

    const cartId = req.params.cartId;
    const _id = req.body._id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const quantity = req.body.quantity;

    let program = {
        _id: _id,
        name: name,
        description: description,
        price: price,
        image: image,
        quantity: quantity
    };

    Cart.findById(cartId)
        .then(cart => {
            if (cart) {
                //cart found, update current cart..

                SCart.deleteFromCart(program);
                cart.programs = SCart.programs,
                    cart.totalPrice = SCart.totalPrice,
                    cart.quantity = SCart.quantity
                console.log('Count at delete:', cart.quantity)

                return cart.save();
            }
        })
        .then(cart => {

            res.json({
                cart: cart,
                message: 'Program updated',
                totalItem: SCart.getTotalItem
            })
        })
        .catch(err => console.log(err));

}

exports.getCartById = (req, res) => {
    const cartId = req.params.id;

    Cart.findOne({
            _id: cartId
        })
        .then(cart => {
            res.json({
                cart: cart,
                totalItem: SCart.getTotalItem
            });
        })
        .catch(err => console.log(err));
}


exports.textCart = (req, res, next) => {
    const _id = req.body._id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    const program = {
        _id: _id,
        name: name,
        description: description,
        price: price,
        image: image,
        quantity: 1
    }

    SCart.addToCart(program);
    SCart.calculatePrice;
    console.log('Cart', SCart.programs);
    console.log('Totalprice', SCart.totalPrice);
    console.log('Qty', SCart.quantity);

    SCart.deleteFromCart(program);

    return res.json({
        message: 'Added'
    });


}