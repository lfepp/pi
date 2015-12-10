angular.module('MainCtrl', ['MainService']).controller('MainController', ['$scope', 'PiCheck', function($scope, PiCheck) {

  $scope.test = 'It works!';
  $scope.digit = 0;

  $scope.update = function(piInput) {
    $scope.piDigit = PiCheck.checkDigit($scope.digit);
    if($scope.piDigit === piInput.slice(-1)) {
      console.log('Matching digit');
    } else {
      console.log('Incorrect digit');
    }
    $scope.digit++;
  };

  console.log(PiCheck.test());

}]);
