'use strict';


// User controller
module.exports = function ($scope, userService) {
	"ngInject";
	
	var vm = this;
	vm.hello = "hello";
	$scope.hello = 'hello';

	console.log(vm);
	console.log($scope);

	userService.list().then(function(response) {
		vm.users = response.data;
	}, function(response) {
		console.log(response);
	});
};