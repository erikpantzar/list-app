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
  const { name, passphrase } = req.body;

  Users.find(function(err, users) {
    if(err) { res.send(err) }

    const user = users.filter((user) => {
      if (user.passphrase == passphrase && user.name == name) {
        return user;
      }
    });

    if (user.length) {
      const signedin = {
        id: user[0]._id,
        name: user[0].name,
        email: user[0].email
      }

      res.send({ message: 'Sign in successfull', user: signedin});
    } else {
      res.send({ message: 'Wrong credentials' });
    }

  });
}

function logout(req, res) {
  res.send({ message: 'sign out, I do not care!'});
}
