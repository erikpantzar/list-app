'use strict';

module.exports = loginController;

function loginController ($localStorage, $state, User) {
	"nginject";

	var vm = this;
	vm.do = login;
	vm.register = register;


	// methods
	function login (user) {

		User.auth(user).then(function(response) {
			var token = response.data.token;
			
			// safe keeping
			$localStorage.userId = response.data.userId;
			$localStorage.token = token;
			
			if( response.data.success ) {
				$state.go('app.list');
			}

		}, function(err) {
			console.log(err);
		});
	}


	function register (user) {
		User.register(user).then(function (response) {
			console.log(response);

			vm.user = {};
		});
	}
}
