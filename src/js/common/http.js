'use strict';

module.exports = function($httpProvider) {
	"ngInject";
	
	$httpProvider.defaults.header.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
};