'use strict';
angular.module('weatherApp')
  .service('weatherAPIService',['$resource', function($resource) {

      this.getWeather = function(city, days) {
      var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
        callback: 'JSON_CALLBACK'
      }, {
        get: {
          method: 'JSONP'        }
      });

      return weatherAPI.get({
        q: city,
        cnt: days
      });
    };
  }]);
