var express = require("express");
var bodyParser = require("body-parser");
var userRoutes = require("./app/routes/routes_user.js");
var medTestRoutes = require("./app/routes/routes_medicaltest.js");

var model = require("./app/database/models/index.js");;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

userRoutes(app, model);
medTestRoutes(app, model);

var server = app.listen(3000, function() {
    console.log("app running on port.", server.address().port);
});