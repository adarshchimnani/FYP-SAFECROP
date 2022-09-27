const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productID:{
        type:String,
        required: true,
    },

    productName:{
        type:String,
        required: true,
    },

    productWt:{
        type:Number,
        required: true,
    },
    
    productPrice:{
        type:Number,
        required: true,
        unique:true
    },

    productStock:{
        type:Number,
        required: true,
    },
});

const products = new mongoose.model("products", productSchema);

module.exports = products;