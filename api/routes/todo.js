var express = require('express');
var router = express.Router();
var Todo = require('../models/todo'); // Schema for User

router.route('/todos/:list_id')
    .get(listTodos)
    .post(addTodo)
;

router.route('/todos/:todo_id')
    .get(getTodo)
    .put(updateTodo)
    .delete(deleteTodo)
;

module.exports = router;

// Methods
// /api/todos/:list_id
function addTodo(req, res) {
    var todo = new Todo();

    todo.name = req.body.name;
    todo.done = req.body.done || false;
    todo.status = req.body.status || { status: 'not set' };
    todo.users = req.body.users || [];

    todo.save(function(err) {
        if (err) {
            res.send(err);
            return false;
        } else {
            res.json({ message: 'Todo Created!' });
        }
    });
}

function listTodos(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
           res.send(err);
        }

       res.json(todos);
   });
}

// /api/todos/:list_id/:todo_id
function getTodo(req, res) {
    Todo.findById(req.params.todo_id, function(err, todo) {
        if (err) {
            res.send(err);
        }

        res.json(todo);
    });
}

function updateTodo(req, res) {
    Todo.findById(req.params.todo_id, function(err, todo) {
        if (err) {
            res.send(err);
        }

        for (prop in req.body) {
          todo[prop] = req.body[prop];
        }

        todo.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Todo updated!' });
        });
    });
}

function deleteTodo(req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function(err, todo) {
         if (err) {
            res.send(err);
         }

        res.json({ message: 'Successfully deleted' });
    });
}
