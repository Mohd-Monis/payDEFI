const express  = require("express");
const control = require("../control/authControllers");



const router = express.Router();

router.get("/login",control.getLogin);

module.exports = router