var User = require('../models/user');
var db = require('../db');

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = function(app, passport) {


	function signon () {

	}

	function register  () {

	}

	function  logout () {

	}


	router.route('/users/login').post(signon);
	router.route('/users/logout').get(logout);
	roter.route('/users/register').post(register);

};