'use strict';

var	angular = require('angular');	
require('ngStorage');
var routes = require('./common/routes');
var authInterceptor = require('./common/intercept');


// setup like this coz otherwize broekn
angular.module('listApp', [
	require('angular-ui-router'),
	require('angular-animate'),
	'ngStorage'
	])
	.config(routes)
	.factory('authInterceptor', authInterceptor);

angular.module('listApp')
 	.config(function ($httpProvider) {
		$httpProvider.defaults.headers.common['Content-Type'] = "application/json";
		$httpProvider.interceptors.push('authInterceptor'); });


var loginController = require('./users/loginController');
var userService = require('./users/userService');

var listController = require('./list/listController');
var listService = require('./list/listService');

var usersController = require('./users/usersController');

var itemController = require('./list/itemController');

// controllers and services
angular.module('listApp')
	
	.service('User', userService)
	.controller('login', loginController)

	.service('List', listService)
	.controller('listController', listController)

	.controller('itemController', itemController)
	.controller('usersController', usersController)
;