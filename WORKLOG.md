# worklog
Latest is furthest down. Order is Old to Newest!!

## api
models, routes, all good! Postman delivers!

## api touchup
Update so some endpoints require other id-s to get access. Lists require uersIds etc.

## demo stuff
setup ngResources, and boilerplate gets of stuff

## users components
setup user and userlist components. Got issue with detail view not fetching new content when updated. Wonder why.. :S
Note: Skip users for now, skip to lists and todos!

## list and todo componentns
had a go at list and todo components, gotta clean up API and figure out how ngResource really works.. !
right now i have no clue how it works. :(

### TODO:
1. To add new todo POST at /api/todos/:list_id  and data with the new todo (name is the only prop needed)
2. Fix som list stuff!
3. check how ngResource really works!!11


## Cleanup some stuff

## Todo CRUD
Just gotta find how to post events to parent component. DONE!

## Just gotta do Updates now, and nicer ADD!
TODO TOOMMORROW or smthn
Issue: cannot add todo to other lists but first!!

## design and issue formatting
Designed some flow things. Have issue where i add todos, they get added to the first list. Need to, when i add a todo, also update a list with the todos reference.. Where do I do this? where do I put this log
