const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  first_name: String,
  last_name: String,
});

const User = mongoose.model('User', UserSchema)
module.exports = User;
