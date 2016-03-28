'use strict';

var angular = require('angular');

// list controller
module.exports = function ($localStorage, $state, User, List) {
    "ngInject";

    var vm = this;
    vm.lists = {};
    vm.addList = addList;
    vm.deleteList = deleteList;


    init();

    function init () {
        List.list().then(successHandler, errorHandler);
    }

    
    function successHandler (response) {
        var lists = response.data;
        vm.lists = lists;

        vm.lists = lists.filter(function(list) {
            var names = [];
            var logName = function (re) {
                names.push(re.data.name);
            };

            for (var i = 0; i < list.accessBy.length; i++ ) {
                User.get(list.accessBy[i]).then(logName);
            }

            return list.names = names;
        });
    }


    function errorHandler (error) {
        console.log(error);
        $state.go('app.login');
    }


    // METHODS
    function addList (name) {

        // get user id ?? 
        var userId = $localStorage.userId;

        List.add(name, userId).then(function(response) {

            var listItem = response.data.data;
            vm.lists.push( listItem );
        });
    }


    function deleteList (id, vmId) {
        // ui remove
        vm.lists.splice( vmId, 1 );

        List.del(id).then(function(response) {
            console.log(response);
        });
    }
};