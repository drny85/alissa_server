const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    datePlaced: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const order = mongoose.model('Order', orderSchema);

module.exports = order;