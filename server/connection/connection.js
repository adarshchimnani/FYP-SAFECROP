const mongoose = require("mongoose");

//const DB = "mongodb+srv://admin:admin@sandbox.tvooui3.mongodb.net/safecropDB?retryWrites=true&w=majority"

mongoose.connect(process.env.DB,  { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("connection start"))
.catch((error)=> console.log(error.message));