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

router.get("/dashboard", function(req,res){
    res.render("dashboard",{
        balance: 1000,
        recepientAddress: 133541,
        recievedAmount : 9000,
        transactionCost:  1
    });
})

module.exports = router