const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  title: String,
  description: String
});

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task;

