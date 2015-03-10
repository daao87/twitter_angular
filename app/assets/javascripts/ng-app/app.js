angular.module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/tweets', {templateUrl: 'tweets.html', controller: 'TweetsCtrl'});
        $routeProvider.otherwise({templateUrl: 'home.html', controller: 'HomeCtrl'});
            
        $locationProvider.html5Mode(true);
    });
