if(process.env.NODE_ENV!="production"){
    require('dotenv').config()
}

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const engine=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const listingRoute=require("./routes/listing.js");
const reviewRoute=require("./routes/review.js");
const userRoute=require("./routes/user.js");
const session=require("express-session");
const mongo_session=require("connect-mongo");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");

let port=8080;
const dbURL=process.env.ATLAS_MongoDBURL;

main()
.then(res=>console.log("Database connection established"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbURL);
} 

app.listen(port,()=>{
    console.log(`listening to port:${port}`);
})

app.engine('ejs', engine);

app.set("view_engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("Root working");
})

const store=mongo_session.create({
    mongoUrl:dbURL,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
});

store.on("error",()=>{
    console.log("Error on MongoStore",err);
})

const sessionObject={
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires:new Date(Date.now()+1000*60*60*24*7),
        maxAge:1000*60*60*24*7,
    },
}

app.use(session(sessionObject));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.UserInfo=req.user;
    next();
});

app.use("/",userRoute);
app.use("/listings",listingRoute);
app.use("/listings/:id/review",reviewRoute);

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"));
})

app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).render("error.ejs",{message});
})