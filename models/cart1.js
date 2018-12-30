//jshint esversion:6
const program = require('./program');

class ShoppingCart {
    constructor() {
        this.programs = [];
        this.quantity = 0;
        this.totalPrice = 0
    }

    addToCart(program) {

        if (!this.inCart(program)) {
            this.programs.push(program);
            this.quantity++;
            this.calculateTotal();
        } else {

            this.programs.forEach(p => {
                if (p._id === program._id) {
                    p.quantity++
                }
            })

            this.quantity++;
            this.calculateTotal();

        }
    }

    calculateTotal() {
        this.totalPrice = 0;
        this.programs.forEach(program => {
            let price = program.price;
            let qty = program.quantity;
            let amount = price * qty;

            this.totalPrice += amount;
        });

    }

    // check if item already in cart..
    inCart(program) {
        let found = false;
        this.programs.forEach(p => {
            if (p._id === program['_id']) {
                found = true
            } else {
                found = false
            }
        })

        return found;
    }


}

module.exports = new ShoppingCart();