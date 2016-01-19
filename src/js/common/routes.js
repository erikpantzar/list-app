'use strict';

module.exports = function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "/views/login/login.html"
        })
        .state('list', {
            url: "/list",
            templateUrl: "/views/list/list.html"
        })
        .state('single', {
            url: "/list/add",
            templateUrl: "/views/list/single.html",
            controller: 'listController',
            controllerAs: 'list'
        });
    
};