angular.module('MainCtrl', ['MainService']).controller('MainController', ['$scope', 'PiCheck', function($scope, PiCheck) {

  $scope.test = 'It works!';
  $scope.digit = 0;
  $scope.piInput = '';

  $scope.update = function() {
    console.log(PiCheck.checkDigit($scope.digit));
    $scope.digit++;
  };

  console.log(PiCheck.test());

}]);
