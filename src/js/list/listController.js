'use strict';


var listController = function (List) {
    "ngInject";
    
    var vm = this;


	var items = [{name: "hej"}];
	vm.items = items;

    function updateList (list) {
    	vm.items = list;
    }
    
    List.list().then(function(response) {
        console.log(response);
    }, function(err) { console.log(err); });

    vm.add = function (item) {
    	var data = {};
    	data.name = item;
    	data.date = new Date();
    	data.checked = false;

    	List.add(data, vm.items, updateList);
		vm.itemInput = "";
    };

    vm.remove = function (item) {
    	List.remove(item, vm.items, updateList);
    };

    vm.checked = function (item, el, i) {
    	console.log(item, el, i);
    	item.checked = true;
    };
};

module.exports = listController;