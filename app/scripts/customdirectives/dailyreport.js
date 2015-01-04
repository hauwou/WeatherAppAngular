'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherApp')
  .directive('dailyReport', function() {
    return {
      restrict: ' EA',
      templateUrl: 'scripts/customdirectives/dailyreport.html',
      replace: true,
      scope: {
        weatherDay: '=',
        convertToStandard: '&',
        convertToDate: '&',
        dateFormat: '@'
      }

    };

  });
