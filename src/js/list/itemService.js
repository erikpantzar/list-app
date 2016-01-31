'use strict';
var api = require('../common/api');

/// Todo Service
module.exports = function ($http) {
	"ngInject";

	var add = function(todos, listId) {
		var data = {
			todoItems: todos,
			id: listId
		};

		return $http.put(api.lists, data);
	};

	var update = function(todos, listId) {
		var data = {
			todoItems: todos,
			id: listId
		};

		return $http.put(api.lists, data);	
	};


	var get = function (id) {
		return $http.get(api.lists+id);
	};

	var remove = function (item, items, cb) {
		items.splice(items.indexOf(item), 1);
		cb(items);
	};

	return {
		add: add,
		remove: remove,
		update: update,
		get: get
	};
};