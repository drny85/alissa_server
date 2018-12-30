//jshint esversion:6
const program = require('./Program');

class ShoppingCart {
    constructor() {
        this.programs = []; // EMPTY ARRAY TO HOLD SC ITEMS
        this.quantity = 0; //KEEP TRACK OF SHOPPING CART QUANTITY
        this.totalPrice = 0 // KEEP TRACK OF SHOPPING CART TOTAL -- POPUPALATED BY CALCULATEPRICE()
    }

    //ADD A PROGRAM/ITEM TO THE CART
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


    //CALCULATE SHOPPING CART TOTAL PRICE
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