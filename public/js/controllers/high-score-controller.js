'use strict';

angular.module('HighScoreCtrl', ['MainService']).controller('HighScoreController', ['$scope', 'PiCheck', function($scope, PiCheck) {
  $scope.submitName = function() {
    PiCheck.highScore($scope.name);
    console.log('Submitted high score for ' + $scope.name);
  }
}]);
