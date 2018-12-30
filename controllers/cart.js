const Cart = require('../models/cart');
const SCart = require('../models/cart1');


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
    console.log('CartId:', cartId);
    const id = req.body._id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    Cart.findOne({
            _id: cartId
        }).then(cart => {

            return cart
        }).then(c => {
            let quantity = 1;
            c.items.push({
                    _id: id,
                    name: name,
                    description: description,
                    price: price,
                    image: image,
                    quantity: quantity
                },
                c.quantity++)

            return c.save()
        })

        .then(result => {
            res.json(result);
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
    console.log('price', SCart.totalPrice);

    return res.json({
        message: 'Added'
    });


}