'use strict';

angular.module('ScoreboardCtrl', ['MainService']).controller('ScoreboardController', ['$scope', 'PiCheck', function($scope, PiCheck) {
  $scope.highScores = PiCheck.getScoreboard();
  console.dir($scope.highScores);
}]);
