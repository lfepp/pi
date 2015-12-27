'use strict';

angular.module('ScoreboardCtrl', ['MainService']).controller('ScoreboardController', ['$scope', 'PiCheck', function($scope, PiCheck) {
  PiCheck.getScoreboard()
  .then(function(highScores) {
    $scope.highScores = highScores;
  })
}]);
