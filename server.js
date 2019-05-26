
const express = require("express"),
  session = require("express-session"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  request = require("request");


const userRoutes = require("./app/routes/userRoutes");
const config = require("./app/config/config");


const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


//Connect to Mongo DB
mongoose
  .connect(config.getDBString(), { useNewUrlParser: true })
  .then(_ => console.log("Connected to MongoDb"))
  .catch(err => console.log(err));

//Configure Routes
app.use(config.API_PATH, userRoutes());


app.listen(
  config.PORT,
  console.log("Server started at - " + config.URL + ":" + config.PORT)
);
