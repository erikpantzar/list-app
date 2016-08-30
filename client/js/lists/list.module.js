// LISTS
ListFactory.$injector = ['$resource'];
function ListFactory($resource) {
  return $resource('/api/lists/:user_id');
}

function listController(Lists) {
  var vm = this;
  vm.lists = Lists.query({user_id: vm.userId});
}

var listsComponent = {
  templateUrl: './js/lists/lists.html',
  controller: listController,
  bindings: {
    userId: '<'
  }
}

function listDetailController(Lists) {
  var vm = this;
}

var listDetailComponent = {
  templateUrl: './js/lists/list-detail.html',
  controller: listDetailController,
  bindings: {
    list: '<'
  }
};

angular.module('picco.lists', ['ngResource'])
  .factory('Lists', ListFactory)
  .controller('listController', listController)
  .controller('listDetailController', listDetailController)
  .component('lists', listsComponent)
  .component('listDetail', listDetailComponent)
;
