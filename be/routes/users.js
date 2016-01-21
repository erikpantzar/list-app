var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');


// connecting to db
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to db');
});


var addUser = function(req, res) {
	var user = new User(req.body);

	user.save(function(err) {
		if (err) {
			return res.send(err);
		}

		res.send({ message: "User added!"});
	});
};

var getUsers = function(req, res) {
	User.find({}, function(err, users) {
		if (err) { 
			return res.send(err);
		} 

		res.json(users); // end res
	});  
}

var updateUser = function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		if(err) {
			return res.send(err);
		}

		for(prop in req.body) {
			user[prop] = req.body[prop];
		}

		user.save(function(err) {
			if(err) {
				return res.send(err);
			}

			res.json({ message: "Updated user!" });
		});
	});

};

var getUser = function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		if(err) {
			return res.send(err);
		}

		res.send(user);
	});
};

var delUser = function(req, res) {
	User.remove({ _id: req.params.id }, function(err, user) {
		if(err) {
			return res.send(err);
		}
		res.json({ message: "Deleted user!" });
	});
};

/* GET users listing. */
router.route('/users')
	.get(getUsers)
	.post(addUser);

router.route('/users/:id')
	.put(updateUser)
	.get(getUser)
	.delete(delUser);

module.exports = router;
