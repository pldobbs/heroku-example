angular.module('herokuApp', ['ngRoute', 'herokuApp.controllers'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            })
    }]);