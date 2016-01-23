'use strict';

var usersController = function ($scope, Users) {
	"ngInject";
	
	var vm = this;
	vm.hello = "hello";
	$scope.hello = 'hello';

	console.log(vm);
	console.log($scope);

	Users.list().then(function(response) {
		vm.users = response.data;
	}, function(response) {
		console.log(response);
	});
};

module.exports = usersController;