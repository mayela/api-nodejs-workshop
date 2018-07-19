var Task = require('../models/task');

exports.getTasks = (req, res, next) => {
  Task.find((err, tasks) => {
  if (err) {
    next(new Error(err));
  }
  else {
    res.status(200).send(tasks);
  }
  });
}