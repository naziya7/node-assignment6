
const express = require("express");
const Blog = require("../models/blog")
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Blog")

const router = express.Router()
// router.use(bodyParser.json())

//// Find Blog ==>
router.get("/", async(req,res)=>{
    const blog = await  Blog.find()
    try{
        res.json({
            status: "success",
            blog: blog
        })
    }
    catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

//// Find By ID Blog ==>

router.get("/:id", async(req,res)=>{
    const blog = await  Blog.find({_id: req.params.id})
    try{
        res.json({
            status: "success",
            blog: blog
        })
    }
    catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

//// Create

router.post("/", async(req,res)=>{
    const blog = await  Blog.create(req.body)
    try{
        res.json({
            status: "success",
            blog: blog
        })
    }
    catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

//// Update 

router.put("/:id", async(req,res)=>{
    const blog = await  Blog.updateOne({_id: req.params.id},req.body)
    try{
        res.json({
            status: "success",
            blog: blog
        })
    }
    catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

//// Delete 

router.delete("/:id", async(req,res)=>{
    const blog = await  Blog.deleteOne({_id: req.params.id})
    try{
        res.json({
            status: "success",
            blog: blog
        })
    }
    catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router