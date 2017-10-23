//User model data Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: String,
  username: String,
  displayName: String
});

module.exports = User = mongoose.model('user', UserSchema);
