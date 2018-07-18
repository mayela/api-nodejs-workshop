const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  title: String,
  description: String,
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
});

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task;

