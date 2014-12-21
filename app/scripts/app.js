'use strict';

/**
 * @ngdoc overview
 * @name weatherApp
 * @description
 * # weatherApp
 *
* Main m    odule of the application.
 */
angular
  .module('weatherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl'
      })

    .when('/forecast/:days', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl'
      })

      .otherwise({
        redirectTo: '/',
        controller: 'HomeCtrl'
      });
  });

