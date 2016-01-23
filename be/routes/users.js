var express = require('express');
var router = express.Router();

var User = require('../models/user');
var db = require('../db');

var addUser = function(req, res) {
	var user = new User(req.body);

	user.save(function(err) {
		if (err) {
			return res.send('error yo: ' + err);
		}

		res.json({ success: "You fucking did it!!"});
	});
};

var getUsers = function(req, res) {

	User.find({}, function(err, users) {
		if (err) { 
			return res.send(err);
		}

		var _users = users.map(function(user) {
			return {
				name: user.name,
				id: user._id
			};
		});

		res.json(_users); // end res
	}); 
}

var getUser = function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		if(err) {
			return res.send(err);
		}

		var _user = {
			name: user.name,
			mail: user.mail,
			id: user._id
		};

		res.send(_user);
	});
};

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
