var express = require('express');
var router = express.Router();
var List = require('../models/list'); // Schema for User


// debug only
// router.route('/lists')
//     .get(listLists)
// ;

router.route('/lists/:user_id')
    .get(list)
    .post(addList)
;

router.route('/lists/:user_id/:list_id')
    .get(getList)
    .put(updateList)
    .delete(deleteList)
;

module.exports = router;

// Methods
// /api/lists/:user_id
function list(req, res) {
    List.find({ users: req.params.user_id }, function(err, lists) {
        if(err) {
            res.send(err);
        }

        res.json(lists);
    })
}

// /api/lists/:user_id
function addList(req, res) {
    var list = new List();

    list.name = req.body.name;
    list.users = req.params.user_id;

    list.save(function(err) {
        if (err) {
            res.send(err);
            return false;
        } else {
            res.json({ message: 'List Created!' });
        }
    });
}

// /api/lists/:user_id
function listLists(req, res) {
    List.find(function(err, lists) {
        if (err) {
           res.send(err);
        }

       res.json(lists);
   });
}

// /api/lists/:user_id/:list_id
function getList(req, res) {
    List.findById(req.params.list_id, function(err, list) {
        if (err) {
            res.send(err);
        }
        res.json(list);
    });
}

// /api/lists/:user_id/:list_id
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

// /api/lists/:user_id/:list_id
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
