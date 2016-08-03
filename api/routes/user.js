const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Schema for User


// INIT
// add login

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
  const user = new User();
  user.name = req.body.name;
  user.passphrase = req.body.passphrase;
  user.email = req.body.email;
  user.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.json({message: 'User Created!'});
  });
}

// /api/users
function listUsers(req, res) {
  User.find(function (err, users) {
    if (err) {
      res.send(err);
    }

    res.json(users);
  })
}

// /api/users/:user_id
function getUser(req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) {
      res.send(err);
    }

    res.json(user);
  });
}



function updateUser(req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) {
      res.send(err);
    }

    for (prop in req.body) {
      if(prop == 'passphrase') {
        bcrypt.hash(req.body.passphrase, 10, (err, hash) => {
            user[prop] = hash;
        });
      } else {
        user[prop] = req.body[prop];
      }
    }

    user.save(function (err) {
      if (err) { res.send(err); }
      res.json({message: 'Updated User', user: user._id });
    });
  });
}

function deleteUser(req, res) {
  User.remove({
    _id: req.params.user_id
  }, function (err) {
    if (err) {
      res.send(err);
    }

    res.json({message: 'Success delete user!'});
  });
}
