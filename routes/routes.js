var faker = require("faker");
var UserController = require("../controllers/users")

var appRouter = function (app) {

  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/users", function (req, res, next) {
    UserController.getUsers(req, res, next);
  });

  app.get("/users/:num", function (req, res) {
    var users = [];
    var num = req.params.num;

    if (isFinite(num) && num  > 0 ) {
      for (i = 0; i <= num-1; i++) {
        users.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          username: faker.internet.userName(),
          email: faker.internet.email()
      });
    }
    res.status(200).send(users);
   } 
   else {
    res.status(400).send({ message: 'invalid number supplied' });
   }
 });
}

module.exports = appRouter;
