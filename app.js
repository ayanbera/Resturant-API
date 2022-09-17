const express = require('express');
const app =  express();



const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());

const products = require('./routes/productRoute');
const users = require('./routes/userRoute');



app.use('/api/v1', products)
app.use('/api/v1', users)

//Middleware
app.use(errorMiddleware)

module.exports = app;