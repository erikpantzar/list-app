var express = require('express');
var router = express.Router();

var lists = [ 
	{ name: "list1", id: 1 },
	{ name: "list2", id: 2},
	{ name: "list4", id: 4 }
];


/* GET users listing. */
router.get('/lists', function(req, res, next) {
  res.send(lists);
});


module.exports = router;