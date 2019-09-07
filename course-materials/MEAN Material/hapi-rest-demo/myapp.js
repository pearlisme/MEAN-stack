angular.module('myApp', []);

angular.module('myApp')
    .controller('storeController', function ($http,$scope) {    
                $http.get('http://localhost:3000/store').then(function(data){
                    $scope.store=data.store;
                  })
            })
  