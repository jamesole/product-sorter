// do not need a try / catch block anymore due to using the async wrapper express-async-errors dependency/package

const Product = require('../models/product');


const getAllProductsStatic = async(req, res) => {
    const products = await Product.find({price:req.query.price});
    res.status(200).json({ products});
}

const getAllProducts = async(req, res) => {
    const products = await Product.find(req.query).limit(10).sort();
    res.status(200).json({products});
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}