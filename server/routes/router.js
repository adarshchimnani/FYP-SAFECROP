const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
//import { Navigate } from 'react-router-dom'
const products = require("../models/productSchema");

const { notStrictEqual } = require("assert");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// const navigate = useNavigate();
// router.get("/", (req, res)=>{
//     console.log("connect");
// });


//1. Register
router.post("/api/user/signup", async (req, res) => {
    // console.log(req.body);
    let { firstName, lastName, email, password } = req.body;

    bcrypt.hash(password, saltRounds).then(async function (hash) {
        password = hash;
        try {

            const preUser = await users.findOne({ email: email });
            console.log(preUser);
    
            if (preUser) {
                // res.status(404).json("This user is already present");
                console.log("This user is already present!");
            }
            else {
    
                const addUser = new users({
                    firstName,
                    lastName,
                    email,
                    password
                });
    
                await addUser.save();
                res.status(201).json({
                    status: 1,
                    data: addUser,
                    message: "User Added Successful",
                    redirect: "/"
                });
                console.log(addUser);
    
            }
    
        } catch (error) {
            res.status(404).json(error);
            console.log("I'm out");
        }
    });

    // if (!firstName || !lastName || !email || !password) {
    //     res.status(422).json("Please fill the data");
    // }

   

});
//1



//2. Login

router.post("/api/user/signin", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
        users.findOne({ email: email }, function (err, foundUser) {
            if (err) {
                console.log(err);
                res.status(400).json(error);
            }
        
            else if (!foundUser)
            {
                res.status(401).send({ message:"Invalid Email or Password."});
            }

            else {
                bcrypt.compare(password, foundUser.password, function (err, result) {
                    if (result === true) {
                        const token = foundUser.generateAuthToken();
                     //   res.status(200).send({data: token, redirect:"/dashboard", message:"Login Successful!"})
                        res.status(201).json({
                            status: 1,
                            token: token,
                            message: "User Login Successful",
                            redirect: "/dashboard"
                        });
                    }
                    else if (err) {
                        res.status(401).send({ message:"Invalid Email or Password."});
                    }
                })
            }
        });

    } catch {
        // res.status(500).send({ message:"Internal server error."})
        console.log("Internal Servor Error");
    }
})


//2


//3. Get Products Data

router.get("/api/dashboard/products",  async(req,res)=>{
    try {
        const productsData=await products.find();
        res.status(201).json(productsData); 
        console.log(productsData);
    } catch (error) {
        res.status(422).json(error)
    }
})

//3



//4. Add Products
router.post("/api/dashboard/products/add", async (req, res) => {
    // console.log(req.body);
    let { productID, productName, productWt, productPrice, productStock } = req.body;

    // bcrypt.hash(password, saltRounds).then(async function (hash) {
    //     password = hash;
        try {

            const preProduct = await products.findOne({ productID: productID });
            console.log(preProduct);
    
            if (preProduct) {
                // res.status(404).json("This user is already present");
                console.log("This product is already present!");
            }
            else {
    
                const addProduct = new products({
                    productID, productName, productWt, productPrice, productStock
                });
    
                await addProduct.save();
                res.status(201).json({
                    status: 1,
                    data: addProduct,
                    message: "Prodcut Added Successfully!",
                    redirect: "/dashboard/products"
                });
                console.log(addProduct);
    
            }
    
        } catch (error) {
            res.status(404).json(error);
            console.log("I'm out");
        }
    // });

    // if (!firstName || !lastName || !email || !password) {
    //     res.status(422).json("Please fill the data");
    // }

   

});
//4


//5. Get Individual Product Data
// router.get("/api/dashboard/products/product/:id", async(req, res)=>{
//     try {
//         console.log(req.params);
//         const {id} = req.params;

//         const product = await products.findById({_id:id})
//         console.log(product);
//         res.status(201).json(product);

//     } catch (error) {
//         res.status(404).json(error);
//     }
// }) 



//5



//6. Delete Product
router.post("/api/dashboard/products/delete", async(req, res)=>{
    try{
        const {pid}=req.body;

        const deleteProduct=await products.findByIdAndDelete({_id:pid})

        console.log(deleteProduct);
        res.status(201).json(deleteProduct);
    }
    catch{

    }
})

//6


//7. Update Product
router.patch("/api/dashboard/products/update/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const updatedProduct = await products.findByIdAndUpdate(id, req.body,{
            new:true
        });

        console.log(updatedProduct);
        res.status(201).json(updatedProduct);

    }
    catch{

    }
})

//7



//8. Get Orders Data

router.get("/api/dashboard/orders",  async(req,res)=>{
    try {
        const ordersData=await orders.find();
        res.status(201).json(ordersData); 
        console.log(ordersData);
    } catch (error) {
        res.status(422).json(error)
    }
})

//8


module.exports = router;