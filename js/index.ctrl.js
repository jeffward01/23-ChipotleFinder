angular.module('app').controller('IndexController', function ($scope, $http, chipotleService) {

    $scope.chipotleData = [];

    //The map informtion for the google maps view
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
            zoom: 11  
    };

    //Gets search Zip Code and Returns Data
    chipotleService.getRestaurants(92101).then(function (data) {
        $scope.chipotleData = data;  
        //Success Message
        successMsg("Locations Found");
        
        //Repositions Google Chrome View to closest search results (Array index[0])
        $scope.map.center={
            latitude: $scope.chipotleData[0].address.latitude,
            longitude: $scope.chipotleData[0].address.longitude
        };
    });




}); // End Controller






function successMsg(string){
    
     Command: toastr["success"](string);


            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-full-width",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
}