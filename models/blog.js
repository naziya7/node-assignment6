const mongoose  = require("mongoose");
const Schema = mongoose.Schema
const ObjectID = Schema.ObjectID


const BlogSchema= new mongoose.Schema({
    topic:{type:String},
    description:{type:String},
    posted_at: {type:Number},
    posted_by:{type:String}
})

const Blog = mongoose.model("Blog", BlogSchema)

module.exports = Blog