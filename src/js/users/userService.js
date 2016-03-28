'use strict';
var api = require('../common/api');

module.exports = User;

function User ($http) {
	"ngInject";


	// only this header for login // register
	// is override of interceptor
	var options = {
		headers: {'Content-Type': 'application/json'}
	};

	return {
		list: list,
		auth: auth,
		register: register,
		remove: remove,
		get: get
	};


	//////// methods

	function list() {
		return $http.get(api.users);
	}

	// accept user object 
	// not sure  where validation should take place
	function auth (user) {
		var data = {
			"name": user.name, "password": user.password
		};
		
		return $http.post(api.auth, data, options);
	}

	function register (user) {
		var data = {
			name: user.name,
			password: user.password,
			email: user.email
		};

		return $http.post(api.users, data, options);
	}

	function remove (userId) {
		return $http.delete(api.users + '/' + userId)
	}

	function get ( userId ) {
		return $http.get(api.users + '/' + userId);
	}

}