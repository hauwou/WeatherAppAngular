'use strict';
angular.module('weatherApp')
  .controller('NavBarCtrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) { 
    
      $scope.isActive = function(currentUrl){
          if (currentUrl === $location.path()){
            return 'active';
          }
          else {
            return '';
          }
         
    };
      
  
  }
                              ]);