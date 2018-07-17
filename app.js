var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var routes = require("./routes/routes.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});

mongoose.connect('mongodb://localhost/todo-list');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

