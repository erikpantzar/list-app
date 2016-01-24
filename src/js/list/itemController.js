'use strict';


// Todo controller
module.exports = function ($stateParams, $state, itemService) {
    'ngInject';

	var vm = this;

    itemService.get($stateParams.id).then(function(response) {
        var todoReponse = response.data;

        vm.name = todoReponse.name;
        vm.todoItems = todoReponse.todoItems;

	}, function(err) {
        console.log(err);
        $state.go('app.login');
    });

	// item actions
    vm.add = function (item) {
    	var data = {};
    	data.name = item;
    	data.date = new Date();
    	data.checked = false;

    	Todo.add(data, vm.items);
		vm.itemInput = "";
    };

    vm.remove = function (item) {
        itemService.del(item, vm.items);
    };

    vm.checked = function (item) {
    	item.checked = true;
    };
};
