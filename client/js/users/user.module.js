

function UserFactory($resource) {
    return $resource('/api/users/:user', {}, {
        get: { method: 'GET', isArray: true },
        query: { method: 'GET', isArray: false, params: {user: '@user'} },
        update: { method: 'PUT', params: {user: '@user'} }
    });
}

function userListController($scope, $element, $attrs, Users) {
    var vm = this;
    vm.users = Users.get({});
    vm.addUser = addUser;
    vm.updateUser = updateUser;
    vm.deleteUser = deleteUser;

    // Methods
    function addUser(name, mail, password) {
        console.log(name, mail, password);
        var newUser = {
            name: name,
            email: mail,
            password: password
        };
        Users.save(newUser, function(ee) {
            console.log('saved', ee);
        });
    }

    function updateUser(user, prop, value) {

    }

    function deleteUser(user) {
        var idx = vm.users.indexOf(user);
        if (idx >= 0) {
          vm.users.splice(idx, 1);
        }
    }


}

function userDetailsController($scope, $element, $attrs, Users) {
    var vm = this;
    console.log(vm.userid);
    vm.details = Users.query({ user: vm.userid });
    vm.removeUser = removeUser;
    vm.updateUser = updateUser;


    // methdos
    function updateUser(updatedUser) {
        var user = Users.get({user: updatedUser._id}, function() {
            user = updatedUser;
            user.$save();
        });
    }

    function removeUser(id) {
        Users.delete({user: id}, function(ee) {
            console.log(ee);
        });

        vm.onDelete({user: vm.details});
    }
}

var userListComponent = {
    templateUrl: "./js/users/userlist.html",
    controller: userListController
};

var userDetailsComponent = {
    templateUrl: './js/users/userdetails.html',
    controller: userDetailsController,
    bindings: {
        userid: '=',
        onUpdate: '&',
        onDelete: '&'
    }
};

// users module
angular.module('picco.users', ['ngResource'])
    .factory('Users', UserFactory)
    .controller('userController', userListController)
    .controller('userDetailsController', userDetailsController)
    .component('userList', userListComponent)
    .component('userDetails', userDetailsComponent)
;
