// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ListSchema   = new Schema({
    name: String,
    todos: Array,
    users: Array
});

module.exports = mongoose.model('List', ListSchema);
