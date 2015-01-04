'use strict';

angular.module('weatherApp')
  .controller('HomeCtrl', ['$scope','$location','cityNameService', function ($scope, $location, cityNameService) {
    $scope.city = cityNameService.city;
    $scope.$watch('city', function() {
       cityNameService.city = $scope.city;
      });
      console.log($scope.city);


      $scope.submit = function(){
      $location.path('/forecast');
      };
  }]);
