'use strict';

// list controller
module.exports = function (List, $localStorage, $state) {
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
        vm.lists = response.data;
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