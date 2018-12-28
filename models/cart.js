const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    item: {
        name: String,
        drescription: String,
        price: Number,
        image: String
    },

    items: {
        type: [Schema.Types.ObjectId],
        ref: 'Program'
    },

    totalPrice: Number,
    quantity: Number
})

const cart = mongoose.model('Cart', cartSchema);

module.exports = cart;