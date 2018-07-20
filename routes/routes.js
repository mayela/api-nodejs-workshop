var faker = require("faker");
var userController = require("../controllers/users");
var taskController = require('../controllers/tasks');

var appRouter = function (app) {

  app.get("/", function(req, res) {
    res.status(200).send("REST API");
  });

  app.get("/users", (req, res, next) => {
    userController.getUsers(req, res, next);
  });

  app.post("/users", (req, res, next) => {
    userController.createUser(req, res, next);
  });

  app.get("/users/:id", (req, res, next) => {
    userController.getUser(req, res, next);
  });

  app.put("/users/:id", (req, res, next) => {
    userController.updateUser(req, res, next);
  });

  app.delete("/users/:id", (req, res, next) => {
    userController.deleteUser(req, res, next);
  });

  app.get("/tasks", (req, res, next) => {
    taskController.getTasks(req, res, next);
  });

  app.post("/tasks", (req, res, next) => {
    taskController.createTask(req, res, next);
  });

  app.get("/tasks/:id", (req, res, next) => {
    taskController.getTask(req, res, next);
  });

  app.put("/tasks/:id", (req, res, next) => {
    taskController.updateTask(req, res, next);
  });

  app.delete("/tasks/:id", (req, res, next) => {
    taskController.deleteTask(req, res, next);
  });
}

module.exports = appRouter;
