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
      
      //the $resource service in the weatherAPIService will INITIALLY return an empty object, to access data AFTER the data have returned MUST use $promise.then
     $scope.weatherResult.$promise.then(
        function(data){
        console.log(data.city.coord.lon);
        $scope.map = { center: { latitude: data.city.coord.lat, longitude: data.city.coord.lon }, zoom: 8 };
            
      },
                   
        function(error){
            console.log(error);
      });

      //console.log(x);
      $scope.convertToFahrenheit = function(kDegrees){
        return Math.round( (1.8 * (kDegrees-273) )+32    );
      };

      $scope.convertDateFormat = function(rawDate) {
        return new Date(rawDate*1000);
      };


  }]);
