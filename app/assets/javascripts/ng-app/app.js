angular.module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(['$httpProvider', '$routeProvider', '$locationProvider', function ($httpProvider, $routeProvider, $locationProvider) {
        
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
        $routeProvider.when('/tweets', {templateUrl: 'tweets.html', controller: 'TweetsCtrl'});
        $routeProvider.otherwise({templateUrl: 'home.html', controller: 'HomeCtrl'});
            
        $locationProvider.html5Mode(true);
    }]);
