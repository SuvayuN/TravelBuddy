const {listingSchema,reviewSchema}=require("./schema.js");
const ExpressError=require("./utils/ExpressError.js");
const Listing=require("./models/listing.js");
const Review=require("./models/review.js");
const wrapAsync=require("./utils/wrapAsync.js");

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error","You must be logged in to perform the task");
        req.session.pathUrl=req.originalUrl;
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    res.locals.redirectUrl=req.session.pathUrl || "/listings";
    next();
}

module.exports.isOwner=wrapAsync(async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(res.locals.UserInfo&&!res.locals.UserInfo._id.equals(listing.owner._id)){
        req.flash("error","You don't have permission to perform that operation");
        return res.redirect(`/listings/${id}`);
    }
    next();
})

module.exports.isAuthor=wrapAsync(async(req,res,next)=>{
    let {reviewId,id}=req.params;
    let review=await Review.findById(reviewId);
    if(res.locals.UserInfo&&!res.locals.UserInfo._id.equals(review.author._id)){
        req.flash("error","You don't have permission to perform that operation");
        return res.redirect(`/listings/${id}`);
    }
    next();
})

module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errorMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errorMsg);
    }
    else{
        next();
    }
}

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errorMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errorMsg);
    }
    else{
        next();
    }
}