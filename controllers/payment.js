const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.chargeCustomer = (req, res, next) => {
    const token = req.body.token.id;
    const email = req.body.email;
    let amount = req.body.amount;
    amount = parseInt(amount).toFixed(2) * 100;



    // Create a new customer and then a new charge for that customer:
    stripe.customers.create({
        email: email

    }).then((customer) => {
        return stripe.customers.createSource(customer.id, {
            source: token
        });
    }).then((source) => {
        return stripe.charges.create({
            amount: amount,
            currency: 'usd',
            customer: source.customer,
            receipt_email: email
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