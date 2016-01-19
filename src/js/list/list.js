'use strict';


var listController = function  () {
    var vm = this;
    vm.items = ['item2', 'item3'];

    vm.add = function (item) {
        console.log(item);
        vm.items.push(item);
    };
};

module.exports = listController;