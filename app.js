const express = require('express');
const app =  express();



const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const products = require('./routes/productRoute');


app.use('/api/v1', products)

module.exports = app;