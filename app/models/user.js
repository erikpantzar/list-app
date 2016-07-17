// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    password: String,
    email: String,
    lists: Array
});

module.exports = mongoose.model('User', UserSchema);
