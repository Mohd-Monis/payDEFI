function getLogin(req,res){
    res.render("login.ejs")
}

module.exports = {
    getLogin : getLogin,
    
}