var express = require("express");
var bodyParser = require("body-parser");
var userRoutes = require("./routes/routes_user.js");
var medTestRoutes = require("./routes/routes_medicaltest.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

userRoutes(app);
medTestRoutes(app)

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});