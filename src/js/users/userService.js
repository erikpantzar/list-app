'use strict';
var api = require('../common/api');

module.exports = User;

function User ($http) {
	"ngInject";

	return {
		list: list,
		auth: auth
	};

	function list() {
		return $http.get(api.users);
	}

	// accept user object 
	// not sure  where validation should take place
	function auth (user) {
		var data = {
			"name": user.name, "password": user.password
		};
		// only this header for login
		// is override of interceptor
		var options = {
			headers: {'Content-Type': 'application/json'}
		};
		
		return $http.post(api.auth, data, options);
	}

}