// TODOS
todoFactory.$injector = ['$resource'];
function todoFactory($resource) {
    return $resource('/api/todos/:list_id/:todo_id', {}, {
        get: { method: 'GET', isArray: false, params: { list_id: '@list_id', todo_id: '@todo_id' } },
        query: { method: 'GEt', isArray: true, params: { list_id: '@list_id',  } },
        update: { method: 'PUT', params: { list_id: '@list_id', todo_id: '@todo_id' } },
        save: { method: 'POST', params: { list_id: '@list_id' } }
    });
}

function todoListController($scope, $element, $attrs, Todo) {
    var vm = this;
    vm.$onInit = init;
    vm.$onChange = change;
    vm.addTodo = addTodo;
    vm.updateTodo = updateTodo;
    vm.onDelete = del;

    function del(todo) {
        console.log(todo);
        console.log(vm);

        Todo.remove({ list_id: vm.listId, todo_id: todo._id }, function(success) {
            var idx = vm.todoList.indexOf(todo);
            if (idx >= 0) {
                vm.todoList.splice(idx, 1);
            }
        });
    }

    // methods
    function init() {
        vm.todoList = Todo.query({ list_id: vm.list_id, todo_id: vm.todos }, function(ee) {
            // DONE BITCHES console.log(ee);
        });
    }

    }

    function addTodo(todoName) {
        console.log(vm.listId);
        Todo.save({ list_id: vm.listId }, { name: todoName }, function(success) {
            console.log(success);
        }, function(error) {
            console.log(error);
        });
    }

    function change(obj) { console.log(obj); 
    function updateTodo(todo) {}
}

var todoListComponent = {
    templateUrl: './js/todos/todos-list.html',
    controller: todoListController,
    bindings: {
        todos: '<',
        listId: '<'
    }
};


function todoItemController(Todo) {
    var vm = this;
    vm.remove = remove;

    //
    function remove(todo) {
        console.log('Sending to parent!!');
        vm.onDelete({ todo: vm.todo });
    }
}

var todoItemComponent = {
    templateUrl: './js/todos/todo-item.html',
    controller: todoItemController,
    bindings: {
        todo: '<',
        onDelete: '&',
        onUpdate: '&'
    }
};

angular.module('picco.todos', ['ngResource'])
    .factory('Todo', todoFactory)
    .controller('todoListController', todoListController)
    .component('todoList', todoListComponent)
    .component('todoItem', todoItemComponent)
    .controller('todoItemController', todoItemController)
;
