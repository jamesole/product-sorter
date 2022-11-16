//filter

require('dotenv').config();


const connectDB = require('./db/connect');

const Product = require('./models/product');

//require the jsonPrducts file
const jsonProducts = require('./products.json');

//connect to the database, to add the jsonProducts to the database
const start = async() => {
    try {
        await connectDB(process.env.URL);  
        await Product.deleteMany();
        await Product.create(jsonProducts);
        //exiting the process, process global variable, passing in 0 is good
        console.log('GOOD');
        process.exit(0);
    }
    catch(error) {
        console.log(error);
        //processing in 1 means bad
        process.exit(1);
    }
}

start();
