
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Blog")
const UserRouts= require("./Routes/Routes")
app.use(express.json())


app.use("/blog",UserRouts)
 
app.get("*", (req,res)=>{
    res.status(500).send("FAILD API")
})

app.listen(5000, ()=>console.log("Your Server Is Up At 5000"))