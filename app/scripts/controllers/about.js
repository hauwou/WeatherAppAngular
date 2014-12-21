'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
