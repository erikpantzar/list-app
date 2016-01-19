'use strict';

(function () {



	var	angular = require('angular'),
		uiRouter = require('angular-ui-router'),
		ngAnimate = require('angular-animate');

	var ngModules = [
		uiRouter,
		ngAnimate
	];


	// var api = require('./common/api');
	var routes = require('./common/routes');


	var listController = require('./list/list');

	angular.module('listApp', ngModules)
		.config(routes)
		.controller('listController', listController);


})();