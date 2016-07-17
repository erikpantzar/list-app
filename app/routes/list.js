var express = require('express');
var router = express.Router();
var List = require('../models/list'); // Schema for User


router.route('/lists')
    .post(addList)
    .get(listLists)
;

router.route('/lists/:list_id')
    .get(getList)
    .put(updateList)
    .delete(deleteList);

module.exports = router;

// Methods
// /api/lists/
function addList(req, res) {
    var list = new List();
    list.name = req.body.name;
    list.todos = req.body.todos;

    list.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'List Created!'});
    });
}

function listLists(req, res) {
    List.find(function(err, lists) {
        if (err) {
           res.send(err);
        }

       res.json(lists);
   });
}

// /api/lists/:list_id
function getList(req, res) {
    List.findById(req.params.list_id, function(err, list) {
        if (err) {
            res.send(err);
        }

        res.json(list);
    });
}

function updateList(req, res) {
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
}

function deleteList(req, res) {
    List.remove({
        _id: req.params.list_id
    }, function(err, list) {
         if (err) {
            res.send(err);
         }

        res.json({ message: 'Successfully deleted' });
    });
}
