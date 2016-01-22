var express = require('express');
var router = express.Router();

var List = require('../models/list');
var db = require('../db');


var _list = {
	// I/0
	add: function(req, res) {
		var list = new List(req.body);
		
		list.save(function(err) {
			if (err) {
				return res.send('error yo: ' + err);
			}	
			res.send({ message: "List added"});
		});
	},
	del: function(req, res) {
		List.remove({ _id: req.params.id }, function(err, list) {
			if(err) {
				return res.send(err);
			}
			res.json({ message: "Deleted user!" });
		});
	},
	update: function(req, res) {
		List.findOne({ _id: req.params.id }, function(err, list) {
			if(err) {
				return res.send(err);
			}

			for(prop in req.body) {
				list[prop] = req.body[prop];
			}

			list.save(function(err) {
				if(err) {
					return res.send(err);
				}

				res.json({ message: "Updated list!" });
			});
		});
	},
	// presentaion
	list: function(req, res) {
		List.find({}, function(err, list) {
			if (err) { 
				return res.send(err);
			} 

			res.json(list); // end res
		});  
	},
	get: function(req, res) {
		List.findOne({ _id: req.params.id }, function(err, list) {
			if(err) {
				return res.send(err);
			}

			res.send(list);
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