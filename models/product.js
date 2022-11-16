const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'product name needs to be provided']
    },
    price: {
        type:Number,
        required:[true, 'product price needs to be provided']
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type:Date,
        default: Date.now()
    },
    company: {
        type:String,
        //enum property is used to limit the number of possible values
        enum: {
            values : ['ikea', 'liddy', 'caressa', 'marcos'],
            //custom error message, {} allows us to access the user value
            message: '{VALUE} is not supported'
        }
    }

})

module.exports = mongoose.model('Product', productsSchema);