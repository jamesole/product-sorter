const express = require('express');
const app = express();
require("dotenv").config();
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
require('express-async-errors');




//middleware: errors
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleWare = require('./middleware/error-handler');


app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href='/api/v1/products'>products route</a>`)
})

//products route
app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleWare);

const start = async() => {
    try {
        await connectDB(process.env.URL);
        app.listen(3000, (req, res) => {
            console.log('Listening on 3000...')
        })
    }
    catch(error) {
        console.log(error);
    }
}

start();
