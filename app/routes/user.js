var express = require('express');
var router = express.Router();
var User = require('../models/user'); // Schema for User

// INIT
router.route('/users')
    .get(listUsers)
    .post(addUser)
;

router.route('/users/:user_id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)
;

module.exports = router;

// Methods
// /api/users
function addUser(req, res) {
    var user = new User();

    user.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.lists = [];

    user.save(function(err) {
        if(err) {
            res.send(err);
        }
        res.json({ message: 'User Created!' });
    })
}

// /api/users
function listUsers(req, res) {
    User.find(function(err, users) {
        if(err) {
            res.send(err);
        }

        res.json(users);
    })
}

// /api/users/:user_id
function getUser(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err) {
            res.send(err);
        }

        res.json(user);
    });
}

function updateUser(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if(err) {
            res.send(err);
        }

        for (prop in req.body) {
          user[prop] = req.body[prop];
        }

        user.save(function(err) {
            if(err) {
                res.send(err);
            }

            res.json({message: 'Updated User'});
        });
    })
}

function deleteUser(req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err) {
        if(err) {
            res.send(err);
        }

        res.json({message: 'Success delete user!'});
    });
}
