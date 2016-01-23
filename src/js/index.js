'use strict';

(function () {
	var	angular = require('angular');	
	require('ngStorage');	
	var routes = require('./common/routes');
	var listController = require('./list/listController');
	var List = require('./list/listService');

	var usersController = require('./users/usersController');
	var loginController = require('./users/loginController');
	var Users = require('./users/userService');

	// setup like this coz otherwize broekn
	angular.module('listApp', [
		require('angular-ui-router'),
		'ngStorage'	
	]).config(routes);
		
		/*.run(function($httpProvider) {
			$httpProvider.defaults.header.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
		}); */

	// controllers and services
	angular.module('listApp')
		.controller('listController', listController)
		.service('List', List)
		.controller('usersController', usersController)
		.controller('loginController', loginController)
		.service('Users', Users);
})();


module.exports = function () {
	return 'guappo';
};