'use strict';

var loginController = ['$scope', '$localStorage', 'userService', function ($scope, $localStorage, userService) {

	$scope.login = function (username, password) {
		userService.auth(username,password).then(function(response) {
			var token = response.data.token;
			console.log(token);
			$localStorage.token = token;
		}, function(err) {
			console.log(err);
		});
	};
}];

module.exports = loginController;