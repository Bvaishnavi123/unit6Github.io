const mongoose = require("mongoose");



const ProductSchema= new mongoose.Schema({
    
    productPic :{type:String,required:true},
    productName:{type:String,required:true},
    priceOfProduct :{type:Number,required:true},
    productBrand : {type:String,required:false},

},{
    timestamps:true,
    versionKey:false
})
const product = mongoose.model("newproduct", ProductSchema)

module.exports =product;