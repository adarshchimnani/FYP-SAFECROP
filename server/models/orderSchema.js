const { date } = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderID:{
        type:String,
        required: true,
    },

    firstName:{
        type:String,
        required: true,
    },

    lastName:{
        type:String,
        required: true
    },

    productsOrdered:[
        {
          productID:{
            type:ObjectId,
            required:true
            },
          productQt:{
              type:Number,
              required:true
          }      
        },    
    ],
    
    orderAmount:{
        type:Number,
        required: true,
        unique:true
    },

    orderAddress:{
        type:String,
        required: true,
    },

    contactNumber:{
        type:Number,
        required:true
    },

    orderDate:{
        type:String,
        required:true
    }
});

const orders = new mongoose.model("orders", orderSchema);

module.exports = orders;

// data : [
//     {
//         order Id,
//         order date,
//         products : [
//             {
//                 product id,
//                 quanity
//                 total 
//             },
//             {

//             }
//         ]
//     },
//     {

//     }
// ]