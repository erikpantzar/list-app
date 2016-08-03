// app/models/bear.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
  name: {
    type: String,
    required: [true, 'No name huh?']
  },
  users: {
    type: [String],
    required: [true, 'Who is diz?']
  }
});

module.exports = mongoose.model('List', ListSchema);
