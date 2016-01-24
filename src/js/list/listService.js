'use strict';

var api = require('../common/api');


// List service
module.exports = function ($http) {
	"ngInject";

	var add = function(name) {
		return $http.post(api.list, { name: name });
	};

	var del = function (name, id) {
		var data = {
			name: name,
			id: id
		};

		return $http.del(api.lists, data);
	};

	var update = function(list) {
		var data = {
			list: list
		};
		
		return $http.put(api.list, data);
	};

	var list = function () {
		return $http.get(api.lists);
	};

	return {
		add: add,
		del: del,
		list: list,
		update: update
	};
};