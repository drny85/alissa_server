const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        require: true
    },
    fullDescription: {
        type: String,
        required: true
    },
    addedOn: {
        type: Date,
        default: Date.now
    }
})


const program = mongoose.model('Program', programSchema);

module.exports = program;