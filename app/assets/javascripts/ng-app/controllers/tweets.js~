angular.module('AngularRails')
    .controller('TweetsCtrl', function ($scope, $http) {
        $scope.query = '';
        $scope.search = function() {
          $scope.loading = false;
          $http.get('/twitter/index.json?search=' + $scope.query).
             success(function(data){
               $scope.tweets = data;
               $scope.loading = true;
             });
        };
        
        $scope.search();
    });
