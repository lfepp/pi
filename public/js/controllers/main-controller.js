angular.module('MainCtrl', ['MainService']).controller('MainController', ['$scope', 'PiCheck', function($scope, PiCheck) {

  $scope.test = 'It works!';
  $scope.index = 0;
  $scope.digit = 0;
  $scope.correctDigit = true;

  $scope.update = function(piInput) {
    $scope.piDigit = PiCheck.checkDigit($scope.index);
    if($scope.piDigit === piInput.slice(-1)) {
      console.log('Matching digit');
    } else {
      console.log('Incorrect digit');
      $scope.correctDigit = false;
      angular.element(document.getElementById('pi-input')).prop('disabled', true);
    }
    $scope.index++;
    if($scope.index < 2) {
      $scope.digit = $scope.index;
    } else {
      $scope.digit = $scope.index - 1;
    }
  };

  console.log(PiCheck.test());

}]);
