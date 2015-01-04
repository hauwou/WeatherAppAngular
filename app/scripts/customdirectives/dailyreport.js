'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 ***change the template url to the github link and rebuild and reupload to github for github pages to work, this is a bug in grunt build.
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
