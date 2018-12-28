//jshint esversion:6
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const MONGO_URL = `mongodb+srv://alissa:Alissa2019@cluster0-gefrm.mongodb.net/alissa`;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello');
})

const programRoutes = require('./routes/program');
const cartRoutes = require('./routes/cart');

app.use(programRoutes);
app.use('/cart', cartRoutes);



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