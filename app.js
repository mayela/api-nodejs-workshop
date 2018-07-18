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

mongoose.connect('mongodb://127.0.0.1:27017/todo-list', { useNewUrlParser: true })
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/todo-list`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/todo-list`)})