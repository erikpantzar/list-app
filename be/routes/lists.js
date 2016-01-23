var express = require('express');
var router = express.Router();

var List = require('../models/list');
var db = require('../db');

var _list = {
	// I/0
	add: function(req, res) {
		var list = new List(req.body);
		db.open(); 
		list.save(function(err) {
			if (err) {
				return res.status(401).send('error yo: ' + err);
			}	
			res.status(201).send({ message: "List added"});
			db.close(); 
		});
	},
	del: function(req, res) {
		db.open(); 
		List.remove({ _id: req.params.id }, function(err, list) {
			if(err) {
				return res.send(err);
			}
			res.json({ message: "Deleted user!" });
			db.close(); 
		});
	},
	update: function(req, res) {
		db.open(); 
		List.findOne({ _id: req.params.id }, function(err, list) {
			if(err) {
				return res.send(err);
				db.close(); 
			}

			for(prop in req.body) {
				list[prop] = req.body[prop];
			}

			list.save(function(err) {
				if(err) {
					return res.send(err);
				}

				res.json({ message: "Updated list!" });
				db.close(); 
			});
		});
	},
	// presentaion
	list: function(req, res) {
		db.open(); 
		List.find({}, function(err, list) {
			if (err) { 
				return res.send(err);
				db.close(); 
			}

			res.json(list); // end res
			db.close(); 
		});  
	},
	get: function(req, res) {
		db.open(); 
		List.findOne({ _id: req.params.id }, function(err, list) {
			if(err) {
				return res.send(err);
			}

			res.send(list);
			db.close();
		});
	} 
};


/* GET users listing. */
router.route('/lists')
	.get(_list.list)
	.post(_list.add);

router.route('/lists/:id')
	.put(_list.update)
	.get(_list.get)
	.delete(_list.del);


module.exports = router;