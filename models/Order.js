const mongoose = require("mongoose");
const Program = require("./Program");
const Customer = require("./Customer");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  items: {
    type: Schema.Types.ObjectId,
    ref: "Program"
  },
  orderTotal: { type: Number, required: true },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
  datePlaced: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const order = mongoose.model("Order", orderSchema);

module.exports = order;
