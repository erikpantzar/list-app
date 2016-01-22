var mongoose = require('mongoose');
var configDb = require('./config/database');

// connecting to db
mongoose.connect(configDb.url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to db');
});