angular.module('weatherApp')
  .controller('ForecastCtrl', ['$scope', '$routeParams','cityNameService','weatherAPIService', function ($scope, $routeParams, cityNameService, weatherAPIService) {
    //var defaultDays = 2;
    $scope.city = cityNameService.city.toUpperCase();
    $scope.days = $routeParams.days || 2;
    //$scope.numDays = $routeParams.numdays || 0; //testing routeparams

      //moved weatherapi into a custom service
/*    $scope.weatherAPI = $resource( "http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get:{method:"JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days});*/
      $scope.weatherResult = weatherAPIService.getWeather($scope.city, $scope.days);

      //console.log($scope.weatherResult);
      $scope.convertToFahrenheit = function(kDegrees){
        return Math.round( (1.8 * (kDegrees-273) )+32    );
      };

      $scope.convertDateFormat = function(rawDate) {
        return new Date(rawDate*1000);
      };


  }]);
