const express = require("express");
const authRoutes = require("./routes/authRoutes");
const homeRoutes = require("./routes/homeRoutes");

//session cookies
const app = express();
const session = require("express-session");
const mongoDBStore = require('connect-mongodb-session')(session);
const dbURL ="mongodb://localhost:27017";
const store = new mongoDBStore({
    databaseName:"Session",
    uri: dbURL,
    collection: "session"
})

//Session Config
const sessionConfig = {
  secret: "hackathonProject",
  resave: false,
  saveUninitialized: false,
  store:store
};
app.use(session(sessionConfig));

app.use(express.urlencoded({extended:false}))

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","view");


app.use(authRoutes);
app.use(homeRoutes)

app.listen(3000);