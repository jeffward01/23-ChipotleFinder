angular.module('app').service('chipotleService', function($http){
   
    return{
        
        getRestaurants: function(zip){
            var promise = $http.get('https://infinite-depths-3549.herokuapp.com/restaurants/92101').then(function(response){
                return response.data;
            });
         return promise;   
        }
    
    }
    
    
});