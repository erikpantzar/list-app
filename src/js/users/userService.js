'use strict';

var api = require('../common/api');

module.exports = function ($http) {
	"ngInject";

	var list = function() {
		return $http.get(api.users);
	};

	var auth = function (user, pw) {
		var data = {
			"name": user, "password": pw
		};
		
		var options = {
			headers: {'Content-Type': 'application/json'}
		};

		return $http.post(api.auth, data, options);
	};

	return {
		list: list,
		auth: auth
	};
};	