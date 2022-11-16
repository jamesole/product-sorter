const express = require('express');
const router = express.Router();
const { getAllProducts, getAllProductsStatic } = require('../controllers/products');

//when the '/' in the router file is used, it indicates the respective route given in the app.js file (/api/v1/products)

//router.route(ROUTE).COMMAND(DESIRED_CONTROLLER)
router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic);

module.exports = router;