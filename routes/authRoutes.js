const express  = require("express");
const control = require("../control/authControllers");
const User = require("../model/user")


const router = express.Router();

router.get("/login",control.getLogin);

router.post("/signup",async function(req,res){
    const user = new User(req.body.name,req.body.phone);
    await user.save();
    res.redirect("/signup");
})
router.post("/login",function(req,res){
    const user = new User(req.body.name, req.body.phone);
    if(user.exists()){
        res.render("home");
    }
    else{
        res.redirect("/login")
    }
})

module.exports = router