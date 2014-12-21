angular.module('weatherApp')
  .controller('HomeCtrl', ['$scope','cityNameService', function ($scope, cityNameService) {
    $scope.city = cityNameService.city;
    $scope.$watch('city', function() {
       cityNameService.city = $scope.city;
      });
      console.log($scope.city);
  }]);
