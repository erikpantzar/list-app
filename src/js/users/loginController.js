'use strict';

var loginController = function ($scope, $localStorage, $state, userService) {
	"nginject";

	$scope.login = function (username, password) {
		userService.auth(username,password).then(function(response) {
			var token = response.data.token;
			$localStorage.token = token;

			$state.go('app.list');

		}, function(err) {
			console.log(err);
		});
	};
};

module.exports = loginController;