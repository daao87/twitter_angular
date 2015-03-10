angular.module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/tweets', {templateUrl: 'twitter.html', controller: 'TwitterCtrl'});
        $routeProvider.when('/', {templateUrl: 'home.html', controller: 'HomeCtrl'});
        $routeProvider.when('/hola', {templateUrl: 'hola.html', controller: 'HolaCtrl'});
            
        $locationProvider.html5Mode(true);
    });
