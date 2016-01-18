'use strict';

module.exports = function($locationProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: "/list",
            templateUrl: "views/list/list.html",
            controller: 'listController'
        });

};