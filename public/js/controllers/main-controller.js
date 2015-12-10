angular.module('MainCtrl', ['MainService']).controller('MainController', ['$scope', 'PiCheck', function($scope, PiCheck) {

  $scope.test = 'It works!';

  $scope.piInput = '';

  console.log(PiCheck.test());

}]);
