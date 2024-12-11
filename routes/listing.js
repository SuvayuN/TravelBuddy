const express=require("express");
const router=express.Router();
const {isLoggedIn,validateListing,isOwner}=require("../middleware.js");
const wrapAsync=require("../utils/wrapAsync.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloud-config.js");
const upload = multer({ storage });

//index route
router.route("/")
.get(wrapAsync(listingController.index))
.post(wrapAsync(listingController.search));

//new route
router.route("/new")
.get(isLoggedIn,wrapAsync(listingController.newForm))
.post(isLoggedIn,upload.single("uploaded-file"),validateListing,wrapAsync(listingController.new));

//show route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("uploaded-file"),validateListing,wrapAsync(listingController.edit))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.delete));

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editForm));

module.exports=router;