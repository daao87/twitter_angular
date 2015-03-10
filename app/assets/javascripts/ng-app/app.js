angular.module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/tweets', {templateUrl: 'twitter.html', controller: 'TwitterCtrl'});
        $routeProvider.when('/', {templateUrl: 'home.html', controller: 'HomeCtrl'});
            
        $locationProvider.html5Mode(true);
    });
