const Listing=require("../models/listing.js");
const geocoding = require("geocoding");

module.exports.index=async (req,res)=>{
    let allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}

module.exports.newForm=async (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    let allListings=await Listing.find({});    
    if(!listing){
        req.flash("error","listing not found");
        return res.redirect("/listings");
    }
    let mapApi=process.env.MAP_API;
    res.render("listings/show.ejs",{listing,mapApi,allListings});
}

module.exports.editForm=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing){
    req.flash("error","listing not found");
    return res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_200");
    res.render("listings/update.ejs",{listing,originalImageUrl});
}

module.exports.new=async (req,res)=>{
    let newListing=new Listing(req.body.listing);
    newListing.image.url=req.file.path;
    newListing.image.filename=req.file.filename;
    newListing.owner=req.user._id;
    let response=await geocoding({
        key:process.env.MAP_API,
        address: req.body.listing.location,
        components: {
          country: req.body.listing.country,
        },
      });
    newListing.geometry=response[0].geometry.location;
    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings");
}

module.exports.search=async(req,res)=>{
    let allListings=await Listing.find( { 'title' : {'$regex' : `${req.body.title}`}});
    if(!allListings.length){
        req.flash("error","No listing found");
        return res.redirect("/listings");
    }
    res.render("listings/index.ejs",{allListings});
}

module.exports.edit=async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    geocoding({
        key:process.env.MAP_API,
        address: req.body.listing.location,
        components: {
          country: req.body.listing.country,
        },
      }).then((response)=>{
        listing.geometry=response[0].geometry.location;
        listing.save(); 
      });
    if(typeof req.file!=="undefined"){
    listing.image={url:req.file.path,filename:req.file.filename};
    listing.save();
    }
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
}

module.exports.delete=async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted");
    res.redirect(`/listings`);
}