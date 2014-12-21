angular.module('weatherApp')
  .controller('ForecastCtrl', ['$scope', '$resource','$routeParams''cityNameService', function ($scope, $resource, $routeParams, cityNameService) {
    $scope.city = cityNameService.city;
    $scope.days = $routeParams.days || 2;

    $scope.weatherAPI = $resource( "http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get:{method:"JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:3});

      console.log($scope.weatherResult);
      $scope.convertToFahrenheit = function(kDegrees){
        return Math.round( (1.8 * (kDegrees-273) )+32    );
      };

      $scope.convertDateFormat = function(rawDate) {
        return new Date(rawDate*1000);
      };


  }]);
