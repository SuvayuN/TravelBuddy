const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview,isAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");

//create route
router.post("/",validateReview,wrapAsync(reviewController.createReview));

//delete route
router.delete("/:reviewId",isAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;