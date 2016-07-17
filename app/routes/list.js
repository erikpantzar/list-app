var express = require('express');
var router = express.Router();
var List = require('../models/list'); // Schema for User


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

            for (prop in req.body) {
              list[prop] = req.body[prop];
            }

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


module.exports = router;
