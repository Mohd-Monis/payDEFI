const express = require("express");
const authRoutes = require("routes/authRoutes");

const app = express();
app.use(authRoutes);

app.listen(3000);