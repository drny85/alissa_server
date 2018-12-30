const mongoose = require('mongoose')
const Program = require('./Program');

const Schema = mongoose.Schema;

const cartSchema = new Schema({

    programs: {
        type: Object,
    },
    totalPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const cart = mongoose.model('Cart', cartSchema);

module.exports = cart;