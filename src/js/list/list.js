'use strict';


var listController = function (listService) {
    var vm = this;


	var items = [{name: "hej"}];
	vm.items = items;

    function updateList (list) {
    	vm.items = list;
    }

    vm.add = function (item) {
    	var data = {};
    	data.name = item;
    	data.date = new Date();
    	data.checked = false;

    	listService.add(data, vm.items, updateList);
		vm.itemInput = "";
    };

    vm.remove = function (item) {
    	listService.remove(item, vm.items, updateList);
    };

    vm.checked = function (item, el, i) {
    	console.log(item, el, i);
    	item.checked = true;
    };
};

module.exports = listController;