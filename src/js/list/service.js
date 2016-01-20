'use strict';


var add = function(item, items, cb) {
	items.push(item);
	cb(items);
};

var remove = function (item, items, cb) {
	items.splice(items.indexOf(item), 1);
	cb(items);
};

module.exports = function () {
	return {
		add: add,
		remove: remove
	};
};