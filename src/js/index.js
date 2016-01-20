'use strict';
var	angular = require('angular');

(function (angular) {

	var	uiRouter = require('angular-ui-router');
	var ngAnimate = require('angular-animate');
	var ngStorage = require('ngstorage');
	var ngTouch = require('angular-touch');

	var ngModules = [
		uiRouter,
		ngAnimate,
		ngTouch
		// ngStorage
	];


	// var api = require('./common/api');
	var routes = require('./common/routes');

	var listController = require('./list/list');
	var listService = require('./list/service');


	angular.module('listApp', ngModules)
		.config(routes)
		.controller('listController', ['listService', listController])
		.service('listService', listService);


})(angular);