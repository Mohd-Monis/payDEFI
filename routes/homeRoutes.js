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

router.get("/send", function(req,res){
    res.render("send",{
        balance: 1000,
        recepientAddress: 133541,
        recievedAmount : 9000,
        transactionCost:  1
    });
})


router.get("/receive",function(req,res){
    res.render("receive",{address: "monis"});
})
module.exports = router