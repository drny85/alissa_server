//jshint esversion:6
const item = require('../models/program');

class ShoppingCart {
    constructor() {
        this.items = [];
        this.quantity = 0;
        this.totalPrice = 0
    }

    addToCart(item) {
        let singleItem = item['_id'];
        this.items.forEach(item => {
            if (item['_id'] === singleItem) {
                item['quantity']++;

            }


        });
        this.items.push(item)

        this.quantity++;


    }

    get calculatePrice() {
        let total = 0;
        this.items.forEach(item => {
            total += item['price'] * item['quantity'];
        })

        return total;
    }
}

module.exports = new ShoppingCart();