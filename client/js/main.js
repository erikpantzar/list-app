// LISTS
angular.module('picco.lists', ['ngResource'])
    .factory('Lists', ListFactory)
    .controller('listController', listController);

ListFactory.$injector = ['$resource'];
function ListFactory($resource) {
    return $resource('/api/lists/:user_id');
}

function listController(Lists) {
    var vm = this;
    vm.lists = Lists.query({ user_id: "578b5defda8a9e7a68d325a3" });
}


// TODOS
angular.module('picco.todos', ['ngResource'])
    .factory('Todo', todoFactory)
    .controller('todoController', todoController);

todoFactory.$injector = ['$resource'];
function todoFactory($resource) {
    return $resource('/api/todos/:list_id');
}

function todoController(Todo) {
    var vm = this;
    vm.todos = Todo.query({ list_id: "578b6c4a44e7d3cb6c040c3e" });
}


// INIT MODULE
angular.module('picco', ['picco.users', 'picco.lists', 'picco.todos']);
