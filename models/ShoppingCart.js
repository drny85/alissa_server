//jshint esversion:6
const program = require("./Program");

class ShoppingCart {
    constructor() {
        this.programs = []; // EMPTY ARRAY TO HOLD SC ITEMS
        this.quantity = 0; //KEEP TRACK OF SHOPPING CART QUANTITY
        this.totalPrice = 0; // KEEP TRACK OF SHOPPING CART TOTAL -- POPUPALATED BY CALCULATEPRICE()
        this.totalItem = 0; //KEEP TRACK OF ALL ITEMS IN THE CART
    }

    //ADD A PROGRAM/ITEM TO THE CART
    addToCart(program) {
        if (!this.inCart(program)) {
            this.programs.push(program);
            this.quantity++;
            this.totalPrice = this.calculateTotal();
            this.calculateTotal();
        } else {
            this.programs.forEach(p => {
                if (p._id === program._id) {
                    p.quantity++;
                    this.calculateTotal();

                }
            });

            this.quantity++;
            this.calculateTotal();
        }
    }

    //CALCULATE SHOPPING CART TOTAL PRICE
    calculateTotal() {
        this.totalPrice = 0;
        this.programs.forEach(program => {
            let price = program.price;
            let quantity = program.quantity;
            let amount = price * quantity;

            this.totalPrice += amount;
        });

        return this.totalPrice;
    }

    // check if item already in cart..
    inCart(program) {
        let found = false;
        this.programs.forEach(p => {
            if (p._id === program._id) {
                found = true;
            } else {
                found = false;
            }
        });

        return found;
    }

    get getTotalItem() {
        let item = 0;
        this.programs.forEach(p => {
            item += p.quantity;
        });
        return item;
    }

    deleteFromCart(program) {
        this.programs.forEach(p => {
            if (p._id === program._id) {
                if (p.quantity <= 1) {
                    this.programs.splice(p, 1);
                    this.quantity--;
                    this.calculateTotal();
                } else {
                    p.quantity--;
                    this.quantity--;
                    this.calculateTotal();

                }
            }
        })


    }
}

module.exports = new ShoppingCart();