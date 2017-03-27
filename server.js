// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

var listRoute = require('./api/routes/list');
var userRoute = require('./api/routes/user');
var todoRoute = require('./api/routes/todo');
var userActions = require('./api/routes/user-actions');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));

var port = process.env.PORT || 8080;        // set our port
// ROUTES FOR OUR API
// =============================================================================

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', listRoute)
  .use('/api', userRoute)
  .use('/api', todoRoute)
  .use('/api', userActions);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


// BASE SETUP
// =============================================================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:joar23@ds047945.mlab.com:47945/unpicco'); // connect to our database
