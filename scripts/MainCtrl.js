angular
  .module('avengersApp')
  .controller('MainCtrl', function($scope, dataService){

    $scope.getHeroes = function() {
      $scope.avengers = dataService.avengers;
    };

    $scope.removeHeroes = function() {
      delete $scope.avengers;
    };

  });  //end MainCtrl
