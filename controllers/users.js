var User = require('../models/user');

exports.getUsers = (req, res, next) => {
  User.find((err, users) => {
  if (err) {
    next(new Error(err));
  }
  else {
    res.status(200).send(users);
  }
  });
}

exports.createUser = (req, res, next) => {
  let newUser = new User(req.body);
  newUser.save((err, user) => {
  if (err) {
    next(new Error(err));
  }
  else {
    res.status(201).send(user);
  }
  });
}

exports.getUser = (req, res, next) => {
  let id = req.params.id
  User.findOne({_id: id}, (err, user) => {
  if (err) {
    next(new Error(err));
  }
  else {
    res.status(200).send(user);
  }
  });
}

exports.updateUser = (req, res, next) => {
  let id = req.params.id;
  User.findOne({_id: id}, (err, user) => {
  if (err) {
    next(new Error(err));
  }
  else {
    let updatedUser = new User(req.body);
    user.username = updatedUser.username;
    user.first_name = updatedUser.first_name;
    user.last_name = updatedUser.last_name;
    user.save();
    res.status(200).send(user);
  }
  });
}

exports.deleteUser = (req, res, next) => {
  let id = req.params.id;
  User.findOne({_id: id}, (err, user) => {
  if (err) {
    next(new Error(err));
  }
  else {
    user.remove();
    res.status(204).send("Deleted");
  }
  });
}
