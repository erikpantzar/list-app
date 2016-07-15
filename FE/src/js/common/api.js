'use strict';

var domain = "http://localhost:9000/api";

var api = {
    // start of api endpoints here
    auth: domain+'/auth',
    users: domain+'/users',
    lists: domain+'/lists'
};


module.exports = api;