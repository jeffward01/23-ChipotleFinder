angular.module('app').controller('IndexController', function($scope, $http, chipotleService){
    
    $scope.chipotleData = {};
    
    chipotleService.getRestaurants(92101).then(function(data){
        $scope.chipotleData = data;
    })
 
    
    
});// End Controller