var express = require('express');
var router = express.Router();
var Users = require('../models/user');

router.route('/user')
  .post(login)
;

router.route('/user')
  .get(logout)
;

module.exports = router;

function login(req, res) {
  Users.find(function(err, users) {
    if(err) { res.send(err) }

    console.log(user);

    const user = users.filter((user)=> {
      if (user.passphrase) {
        return user;
      }
    });

    res.send({ message: 'Yah'});

  });
}

function logout(req, res) {
  res.send({ message: 'sign out, I do not care!'});
}
