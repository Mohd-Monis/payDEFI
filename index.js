const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","view");
app.use(authRoutes);

app.listen(3000);