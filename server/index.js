require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./connection/connection");
//const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");



const port= process.env.PORT || 8003;

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(` Server is start on port number ${port}`)
})










// require('dotenv').config();
// const express = require('express')
// const mongoose=require('mongoose')
// require("./db/conn")
// const users=require('./model/useSchema')
// const cors=require('cors')
// const router=require('./routes/router')


// const app=express();

// const port=8003;

// app.use(cors());

// app.use(express.json())

// app.use(router)

// app.listen(port,()=>{
//     console.log(` Server is start on port number ${port}`)
// })