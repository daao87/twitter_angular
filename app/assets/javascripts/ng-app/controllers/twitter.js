angular.module('AngularRails')
    .controller('TwitterCtrl', function ($scope, $http) {
        
        $scope.query = "";
        $scope.tweets = [{"text": "Cargando..."}];
        
        $scope.search = function() {          
          $scope.tweets = [{"text": "Cargando..."}];
          $http.get('/twitter/index.json?search=' + $scope.query).
             success(function(data){
               $scope.tweets = data;
             });          
        };
        
        $scope.search();
        
    });

