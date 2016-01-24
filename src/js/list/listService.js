'use strict';

var api = require('../common/api');

module.exports = function ($http) {
	"ngInject";

	var add = function(item, items, cb) {
		items.push(item);
		cb(items);
	};

	var remove = function (item, items, cb) {
		items.splice(items.indexOf(item), 1);
		cb(items);
	};

	var list = function () {
		return $http.get(api.lists);
	};

	var get = function(id) {
		return $http.get(api.lists, {id: id});
	};

	return {
		add: add,
		remove: remove,
		get: get,
		list: list
	};
};