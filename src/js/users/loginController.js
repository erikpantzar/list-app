'use strict';

var loginController = function ($scope, $state, User) {
	console.log('Hej');

	$scope.login = function (username, password) {
		console.log(username, password);
		
		User.auth(username,password).then(function(response) {
			console.log(response);
		});
	};
};


module.exports = loginController;