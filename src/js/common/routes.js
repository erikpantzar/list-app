'use strict';

module.exports = function($locationProvider, $stateProvider, $urlRouterProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/app/list');

    $stateProvider
        .state('app', {
            url: '/app'
        })
        .state('app.login', {
            url: "/login",
            templateUrl: "/views/login/login.html",
            controller: 'loginController'
        })
        .state('app.list', {
            url: "/list",
            templateUrl: "/views/list/list.html",
            controller: 'listController'
        })
        .state('app.list.single', {
            url: "/single",
            templateUrl: "/views/list/single.html",
            controller: 'listController',
            controllerAs: 'list'
        })
        .state('app.users', {
            url: "/users",
            templateUrl: "/views/users/users.html",
            controller: 'usersController'
        });
};