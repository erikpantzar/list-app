var express = require('express');
var router = express.Router();
var Todo = require('../models/todo'); // Schema for User
var List = require('../models/list');

router.route('/todos')
  .get(list)
;


router.route('/todos/:user_id/:list_id')
  .get(listTodos)
  .post(addTodo)
;

router.route('/todos/:todo_id')
  .get(getTodo)
  .put(updateTodo)
  .delete(deleteTodo)
;

module.exports = router;

function list(req, res) {
  Todo.find(function(err, todos) {
    if(err) {
      res.send(err);
    }

    res.json(todos);
  });
}

// Methods
// /api/todos/:list_id
function addTodo(req, res) {
  var todo = new Todo();

  todo.name = req.body.name;
  todo.list = req.body.list;
  todo.done = req.body.done || false;
  todo.status = req.body.status || {status: 'not set'};

  todo.save(function (err) {
    if (err) {
      res.send(err);
      return false;
    } else {
      res.json({message: 'Todo Created!'});
    }
  });

  // find asociated list and PUt that list
  // user_id and list_id
}

function listTodos(req, res) {
  // get list and the id of the todos to be gotte
  Todo.find({ list: req.params.list_id }, function(err, todos) {
    if(err) { res.send(err); }
    console.log(req.params.list_id, todos);

    res.json(todos);
  });
}

// /api/todos/:todo_id
function getTodo(req, res) {
  Todo.findById(req.params.todo_id, function (err, todo) {
    if (err) {
      res.send(err);
    }

    res.json(todo);
  });
}

function updateTodo(req, res) {
  Todo.findById(req.params.todo_id, function (err, todo) {
    if (err) {
      res.send(err);
    }

    for (prop in req.body) {
      todo[prop] = req.body[prop];
    }

    todo.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json({message: 'Todo updated!'});
    });
  });
}

function deleteTodo(req, res) {
  Todo.remove({
    _id: req.params.todo_id
  }, function (err, todo) {
    if (err) {
      res.send(err);
    }

    res.json({message: 'Successfully deleted'});
  });
}
