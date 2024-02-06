const express  = require("express");

const router = express.Router();

router.get("/",function(req,res){ 
    return res.render("home");
});

router.get("/send", function(req,res){
    if(req.session.isAuth){
        res.render("send");
    }
    else{
        return res.redirect("/login");
    }
    
})


router.get("/receive",function(req,res){
    if(req.session.isAuth){
        res.render("receive",{address: "monish"});
    }
    else{
        return res.redirect("/login");
    }
    
})

router.get("/dashboard",function(req,res){
    if(req.session.isAuth){
        res.render("dashboard",{
            solanaCoins: 10,
            balance: 9000
        })
    }
    else{
        return res.redirect("/login");
    }
    
})

router.get("/setting",function(req,res){
    if(req.session.isAuth){
        res.render("setting",{
           name : req.session.name,
           phone: req.session.phone
        })
    }
    else{
        return res.redirect("/login");
    }
    
})
module.exports = router