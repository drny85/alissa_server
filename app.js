//jshint esversion:6
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const validador = require('express-validator');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const MONGO_URL = `mongodb+srv://alissa:${process.env.MY_MONGO_PASSWORD}@cluster0-gefrm.mongodb.net/alissa`;


app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(validador());



app.get('/', (req, res) => {
    res.send('Hello');
})

const programRoutes = require('./routes/program');
const cartRoutes = require('./routes/cart');
const emailRoutes = require('./routes/email');
const customerRoutes = require('./routes/customer');


app.use(programRoutes);
app.use('/cart', cartRoutes);
app.use('/email', emailRoutes);
app.use('/customer', customerRoutes);



mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true
    })
    .then(result => {
        let PORT = process.env.PORT || 3000;
        app.listen(PORT);
        console.log('Server started and DB Connected');
    })
    .catch(err => {
        console.log(err.message);
    });