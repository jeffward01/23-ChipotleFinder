angular.module('app').controller('IndexController', function ($scope, $http, chipotleService) {

    $scope.chipotleData = [];

    //The map informtion for the google maps view
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
            zoom: 8    
    };

    //Gets search Zip Code and Returns Data
    chipotleService.getRestaurants(92101).then(function (data) {
        $scope.chipotleData = data;
        
        
        //Repositions Google Chrome View to closest search results (Array index[0])
        $scope.map.center={
            latitude: $scope.chipotleData[0].address.latitude,
            longitude: $scope.chipotleData[0].address.longitude
        };
    });




}); // End Controller