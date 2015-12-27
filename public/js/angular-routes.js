'use strict';

angular.module('angularRoutes', []).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })
  .state('home.high-score', {
    url: 'high-score',
    templateUrl: 'views/high-score.html',
    controller: 'HighScoreController'
  })
  .state('scoreboard', {
    url: '/leaderboard',
    templateUrl: 'views/scoreboard.html',
    controller: 'ScoreboardController'
  })

}]);
