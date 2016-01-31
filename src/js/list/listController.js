'use strict';

// list controller
module.exports = function (List) {
    "ngInject";

    var vm = this;

    // LIST LIST 
    List.list().then(function(response) {
        console.log(response.data);
        vm.lists = response.data;
    });

    vm.deleteList = function(id) {
        List.del(id).then(function(response) {
            console.log(response);
        });
    };

    vm.addList = function (name) {
        List.add(name).then(function(response) {
           console.log(response); 
        });
    };
};