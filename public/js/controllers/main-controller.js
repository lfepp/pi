'use strict';

angular.module('MainCtrl', ['MainService']).controller('MainController', ['$scope', 'PiCheck', function($scope, PiCheck) {

  $scope.test = 'It works!';
  $scope.index = 0;
  $scope.digit = 0;
  $scope.correctDigit = true;

  $scope.update = function(piInput) {
    $scope.piDigit = PiCheck.checkDigit($scope.index);
    if($scope.piDigit !== piInput.slice(-1)) {
      $scope.correctDigit = false;
      angular.element(document.getElementById('pi-input')).prop('disabled', true);
      $scope.index--;
      PiCheck.end($scope.digit);
    }
    $scope.index++;
    if($scope.index < 2) {
      $scope.digit = $scope.index;
    }
    else {
      $scope.digit = $scope.index - 1;
    }
    if($scope.index === 1) {
      angular.element(document.getElementById('pi-input'))[0].value = '3.';
      $scope.index++;
    }
  };

  $scope.reset = function() {
    $scope.index = 0;
    $scope.digit = 0;
    $scope.correctDigit = true;
    $scope.piInput = '';
    angular.element(document.getElementById('pi-input')).prop('disabled', false);
  };

}]);
