'use strict';

module.exports = function($http) {
	$http.defaults.headers.post = "application/x-www-form-urlencoded";
};