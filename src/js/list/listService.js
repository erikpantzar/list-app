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

	var get = function () {
		return $http.get(api.lists);
	};


	return {
		add: add,
		remove: remove,
		get: get
	};
};