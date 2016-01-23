'use strict';

var loginController = function ($scope, $localStorage, $state, User) {
	"ngInject";

	console.log('Hej');

	$scope.login = function (username, password) {
		
		User.auth(username,password).then(function(response) {
			var token = response.data.token;
			console.log(token);
			$localStorage.token = token;
			// $state.go('app.list');
		}, function(err) {
			console.log(err);
		});
	};
};

module.exports = loginController;