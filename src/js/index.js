'use strict';

var	angular = require('angular');	
require('ngStorage');	
var loginController = require('./users/loginController');
var usersController = require('./users/usersController');
var userService = require('./users/userService');
var listController = require('./list/listController');
var List = require('./list/listService');
var routes = require('./common/routes');
var authInterceptor = require('./common/intercept');


// setup like this coz otherwize broekn
angular.module('listApp', [
	require('angular-ui-router'),
	'ngStorage'	
])
.config(routes)
.factory('authInterceptor', authInterceptor)
.config(function ($httpProvider) {
	$httpProvider.defaults.headers.common['Content-Type'] = "application/json";
	$httpProvider.interceptors.push('authInterceptor');
});
	
// controllers and services
angular.module('listApp')
	.service('List', List)
	.service('userService', userService)
	.controller('listController', listController)
	.controller('usersController', usersController)
	.controller('loginController', loginController);