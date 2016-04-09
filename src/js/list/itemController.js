'use strict';


// Todo controller
module.exports = function ($stateParams, List) {
    'ngInject';

	var vm = this;
    var listId = $stateParams.id;

    vm.todos = [];
    vm.add = addTodo;
    vm.remove = removeTodo;

    // init
    init();

    function init () {
        List.get(listId).then(function (response) {
            var listObj = response.data;
            vm.todos = listObj.todoItems;
        });
    }


    // methods
    function addTodo (item) {
        vm.newTodo = "";
        
        if( vm.todos ) {
            vm.todos.push(item);
        } else {
            vm.todos = [item];
        }

        var data = {
            "todoItems": vm.todos
        };

        List.update(listId, data).then(function(response) {
            console.log(response);
        });
    }


    function removeTodo (index) {
        vm.todos.splice(index, 1);

        var data = {
            "todoItems": vm.todos
        };

        List.update(listId, data).then(function(response) {
            console.log(response);
        });
    }

};