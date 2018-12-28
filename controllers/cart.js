const Cart = require('../models/cart');


exports.createCart = (req, res) => {
    const cart = new Cart({
        item: {
            name: '',
            description: '',
            image: '',
            price: 0
        },
        items: [],
        totalPrice: 0,
        quantity: 0
    })

    cart.save()
        .then(cart => {
            res.json(cart)
        })
        .catch(err => console.log(err));
}

exports.addToCart = (req, res) => {
    const cartId = req.params.id;
    const id = req.body._id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    Cart.findOneAndUpdate({
            _id: cartId
        })
        .then(cart => {
            if (cart) {
                console.log(cart);

            }
        })
        .catch(err => console.log(err));
}

exports.getCartById = (req, res) => {
    const cartId = req.params.id;

    Cart.findOne({
            _id: cartId
        })
        .then(cart => res.json(cart))
        .catch(err => console.log(err));
}