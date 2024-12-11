const { required } = require("joi");
const mongoose=require("mongoose");

let listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        url:String,
        filename:String,
    },
    price:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    geometry:{
        type:Object,
    },
    reviews:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review",
        },
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;