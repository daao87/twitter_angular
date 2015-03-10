angular.module('AngularRails', [
        'ngRoute',
        'templates',
        'ngResource'
    ]).config(function ($routeProvider, $locationProvider) {
        
        //$routeProvider.when('/tweets', {templateUrl: 'twitter.html', controller: 'TwitterCtrl'});
        $routeProvider.otherwise({templateUrl: 'home.html', controller: 'HomeCtrl'});
            
        $locationProvider.html5Mode(true);
    });
