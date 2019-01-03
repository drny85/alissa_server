const Customer = require('../models/Customer');
const {
    validationResult
} = require('express-validator/check');



exports.addCustomer = (req, res, next) => {
    const {
        email,
        name,
        last_name,
        address,
        apt,
        city,
        state,
        zipcode
    } = req.body;

    console.log(email);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const customer = new Customer({
        name: name,
        last_name: last_name,
        email: email,
        address: address,
        apt: apt,
        city: city,
        state: state,
        zipcode: zipcode
    })

    customer.save()
        .then(customer => {
            res.json(customer)
        })
        .catch(err => next(err));




}