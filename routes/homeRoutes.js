const express  = require("express");

const router = express.Router();

router.get("/",function(req,res){
    if(req.session.isAuth){
        return res.render("home");
    }
    else{
        return res.redirect("/login");
    }
});

module.exports = router