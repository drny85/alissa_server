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
        } else {

            this.programs.forEach(p => {
                if (p._id === program._id) {
                    p.quantity++
                }
            })

            this.quantity++;

        }




    }

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

    get calculatePrice() {
        let total = 0;
        this.programs.forEach(p => {
            total += p.price
        })

        return total;
    }
}

module.exports = new ShoppingCart();