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
var usersController = require('./users/usersController');
var userService = require('./users/userService');
var listController = require('./list/listController');
var listService = require('./list/listService');
var itemController = require('./list/itemController');
var itemService = require('./list/itemService');

// controllers and services
angular.module('listApp')
	.service('List', listService)
	.service('userService', userService)
	.controller('listController', listController)
	.controller('usersController', usersController)
	.controller('loginController', loginController)
	.controller('itemController', itemController)
	.service('itemService', itemService);
;
