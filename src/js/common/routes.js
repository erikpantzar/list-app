'use strict';

module.exports = function($locationProvider, $stateProvider, $urlRouterProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/li/list');

    $stateProvider
        .state('app', {
            url: '/li',
            controller: function($localStorage, $state) {
                var ls = $localStorage;
                if(!ls.token) {
                    $state.go('app.login');
                }
            }
        })
        .state('app.login', {
            url: "/login",
            templateUrl: "/views/login/login.html",
            controller: 'loginController'
        })
        .state('app.list', {
            url: "/list",
            templateUrl: "/views/list/list.html",
            controller: 'listController',
            controllerAs: 'list'
        })
        .state('app.list.single', {
            url: "/:id",
            templateUrl: "/views/list/single.html",
            controller: 'itemController',
            controllerAs: 'todo'
        })
        .state('app.users', {
            url: "/users",
            templateUrl: "/views/users/users.html",
            controller: 'usersController'
        });
};