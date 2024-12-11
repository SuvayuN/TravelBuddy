const User=require("../models/user.js");

module.exports.signupForm=(req,res)=>{
    res.render("user/signup.ejs");
}

module.exports.loginForm=(req,res)=>{
    res.render("user/login.ejs");
}

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are now logged out");
        res.redirect("/listings");
    })
}

module.exports.signup=async(req,res)=>{
    try{
        let {email,username,password}=req.body;
        let registeredUser=await User.register({email,username},password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to TravelBuddy");
            res.redirect("/listings");
        })
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

module.exports.login=async(req,res)=>{
    req.flash("success","Welcome back to TravelBuddy");
    res.redirect(res.locals.redirectUrl);
}