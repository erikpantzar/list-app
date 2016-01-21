# List app
Keep your list updated and clean

## goal
- have an app with auth with realtime list sharing!
- scope
- save items in list
- save list in localstorage
- save list to db
- users / auth
- users can have multiple lists
- use app with no connection
- categorize items
- sort items according to category
- realtime sharing of lists

## stack
example stack
http://mean.io/#!/

realtime
http://socket.io/

offline
https://www.talater.com/upup/

node hosting
https://www.heroku.com/

db
https://www.mongodb.org/
 ( or other nosql )

db layer
http://expressjs.com/

clientside
angular / react

## roadmap
### 1.0 Final
1. Realtime sharing of lists
2. Users can have mutlple lists and share them internally
3. User management
	Registration - email - pw - username(optional)
	UsersLists: [{ title: string, usersAccess: [ id, id,]  }]
4. access lists offline ( no login, no realtime )



- 0.0
    - ~~setup stack~~
    - ~~define goal~~
    - ~~setup roadmap~~
    - ~~setup project on github~~
    - ~~add readme~~
    - ~~buy domain~~

- ~~0.1 basics~~
    1. ~~add item to list~~
    2. ~~save list localstorage~~
    3. ~~controllers and views~~
- 0.2 build & enviroment
    1. ~~build and deploy to enviroment automated~~ (heroku OK?!)
    2. ~~setup remote host ( heroku / other )~~
    3. ~~find db hosting mongodb~~
- 0.3  DB storage and auth
    1. implement db storage of list
    2. expressjs stuff
    3. ~~check on auth~~

- 0.4 data and auth
    1. api design
    2. auth step 1 implementation => https://gist.github.com/erikpantzar/bf881715946424fabc66
    3. auth ( setup tokens ) => https://gist.github.com/erikpantzar/bf881715946424fabc66
- 0.5  fun stuff
    1. realtime
    2. add items simultaneously as other user
- 0.6
    1. offline
    2. some more designs of views
- 0.7 Test
    1. Register users
    2. "Forgot password"
    3. Let 2 mothers use the app to write good features about their sons
    4. Let 2 mothers share lists with another user

- 0.8 Adjust, polish
    1. Design adjustments from 0.7


