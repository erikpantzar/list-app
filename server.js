// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');


// Schema for lists
var List = require('./app/models/list');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

router.route('/lists')
    .post(function(req, res) {
        var list = new List();
        list.name = req.body.name;
        list.todos = req.body.todos;

        list.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'List Created!'});
        })
    })

    .get(function(req, res) {
        List.find(function(err, lists) {
            if (err) {
               res.send(err);
            }

           res.json(lists);
       });
    })

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/lists/:list_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        List.findById(req.params.list_id, function(err, list) {
            if (err) {
                res.send(err);
            }

            res.json(list);
        });
    })

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        List.findById(req.params.list_id, function(err, list) {

            if (err) {
                res.send(err);
            }
            list.name = req.body.name;  // update the bears info

            // save the bear
            list.save(function(err) {
                if (err) {
                    res.send(err);
                }

                res.json({ message: 'List updated!' });
            });

        });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
   .delete(function(req, res) {
       List.remove({
           _id: req.params.list_id
       }, function(err, list) {
            if (err) {
               res.send(err);
            }

           res.json({ message: 'Successfully deleted' });
       });
   });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


// BASE SETUP
// =============================================================================

var mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:joar23@ds047945.mlab.com:47945/unpicco'); // connect to our database
