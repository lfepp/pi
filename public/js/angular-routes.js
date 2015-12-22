'use strict';

angular.module('angularRoutes', []).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })
  .state('high-score', {
    url: '/high-score',
    templateUrl: 'views/high-score.html',
    controller: 'HighScoreController'
  })

}]);
