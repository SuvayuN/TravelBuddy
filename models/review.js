const { required } = require("joi");
const mongoose=require("mongoose");

let reviewSchema=new mongoose.Schema({
   author:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
   },
   rating:{
    type:Number,
    min:1,
    max:5
   },
   comment:String,
   createdAt:{
    type:Date,
    default:Date.now()
   }
})

module.exports=mongoose.model("Review",reviewSchema);