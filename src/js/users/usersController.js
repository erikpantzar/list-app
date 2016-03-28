'use strict';

module.exports = userController;

function userController (User) {
	"nginject";

	var vm = this;

	vm.users = {};
	vm.remove = remove;
	vm.register = register;

	init();

	function init() {
		User.list().then(function(response) {
			console.log(response);
			vm.users = response.data;
		});
	}

	/// Methods

	function register (user) {
		User.register(user).then(function (response) {
			vm.users.push(vm.user);			
			console.log(response);
			vm.user = {};
		}, function(error) {
			console.log(error);
		});
	}


	function remove (id, index) {
		// update ui
		vm.users.splice(index, 1);

		// update backend
		User.remove(id).then(function(response) {
			console.log('Si, claro! ' + response);
		}); 
	}
}
