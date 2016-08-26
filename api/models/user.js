var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  passphrase: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hash: String
});

module.exports = mongoose.model('User', UserSchema);
