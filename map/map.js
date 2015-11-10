angular.module('templateStore.map', [
    'ngRoute',
    'ngCookie',
    'ngResource',
    'ngSanitize'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/map', {
                templateUrl: 'map/map.html',
                controller: 'MapCtrl'
            });
    });
