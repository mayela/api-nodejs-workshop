var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var routes = require("./routes/routes.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});

mongoose.connect('mongodb://127.0.0.1:27017/todo-list', { useNewUrlParser: true })
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/todo-list`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/todo-list`)})