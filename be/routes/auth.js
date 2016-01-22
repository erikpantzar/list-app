var express = require('express');
var router = express.Router();
var app = express();

var User = require('../models/user');
var db = require('../db');

var jwt = require('jsonwebtoken'); 
var configSecret = require('../config/tokkken');

var auth = function(req, res) {
	User.findOne({
		name: req.body.name
	}, function(err, user) {
	    if (err) throw err;

	    if (!user) {
	    	res.json({ success: false, message: 'Authentication failed. User not found.' });
	    } else if (user) {
			// check if password matches
			if (user.password != req.body.password) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {
				// if user is found and password is right
				// create a token
				var token = jwt.sign(user, app.get('superSecret'), {
					expiresIn: 2840 //
				});

				// return the information including token as JSON
				res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token
				});
			}
		}
	});
};

router.route('/auth').post(auth);

app.set('superSecret', configSecret.secret);
// route middleware to verify a token
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});


module.exports = router;