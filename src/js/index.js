'use strict';
var	angular = require('angular');

(function (angular) {

	var	uiRouter = require('angular-ui-router');
	var ngAnimate = require('angular-animate');
	var ngTouch = require('angular-touch');

	var ngModules = [
		uiRouter,
		ngAnimate,
		ngTouch
	];

	var routes = require('./common/routes');
	var httpHeaders = require('./common/http');

	var listController = require('./list/controller');
	var List = require('./list/list');

	var usersController = require('./users/usersController');
	var loginController = require('./users/loginController');
	var Users = require('./users/User');


	angular.module('listApp', ngModules)
		.config(routes)
		.run(httpHeaders)
		.controller('listController', ['List', listController])
		.service('List', ['$http', List])
		.controller('usersController', ['$scope', 'Users', usersController])
		.controller('loginController', ['$scope', '$state', 'Users', loginController])
		.service('Users', ['$http', Users]);


})(angular);