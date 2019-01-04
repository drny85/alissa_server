const stripe = require('stripe')(process.env.STRIPE_KEY);
const Cart = require('../models/Cart');


exports.chargeCustomer = (req, res, next) => {
    const token = req.body.token.id;
    const email = req.body.email;

    const cart = req.body.cart;
    const customer = req.body.customer;
    let amount = Math.round(cart.cart.totalPrice * 100);

    // Create a new customer and then a new charge for that customer:
    stripe.customers.create({
        email: email,
        metadata: {
            cartId: cart.cart._id,
            name: customer.name,
            last_name: customer.last_name,
            address: customer.address,
            city: customer.city,
            zipcode: customer.zipcode

        }

    }).then((customer) => {
        return stripe.customers.createSource(customer.id, {
            source: token
        });
    }).then((source) => {
        return stripe.charges.create({
            amount: amount,
            currency: 'usd',
            customer: source.customer,
            receipt_email: email,
            source: {

            }

        });
    }).then((charge) => {
        // New charge created on a new customer
        if (!charge) return res.status(400).json({
            message: 'Something went wrong'
        })

        res.status(200).json({
            message: 'Payment success',
            respond: charge.outcome,
            status: charge.status
        })
    }).catch((err) => {
        // Deal with an error
        console.log(err);
    });



}