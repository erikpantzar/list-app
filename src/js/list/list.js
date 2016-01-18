'use strict';


var listController = function  () {

    var vm = this;

    vm.list = [];
    vm.addItemToList = function (item) {
        vm.list.push(item);
    };
};

module.exports = listController;