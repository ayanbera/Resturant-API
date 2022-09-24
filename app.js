const express = require('express');
const app =  express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')


const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());

const products = require('./routes/productRoute');
const users = require('./routes/userRoute');


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/api/v1', products)
app.use('/api/v1', users)

//Middleware
app.use(errorMiddleware)

module.exports = app;