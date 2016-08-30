function appController() {
    var vm = this;

    vm.yeah = 'Yheaaa';
    vm.userID = '';

    vm.userHandler = function(user) {
      console.log('userHandler: ', user);
      vm.userID = user.id;
    };
}


// INIT MODULE
angular.module('picco', ['picco.users', 'picco.lists', 'picco.todos', 'picco.login'])
  .controller('appController', appController);
