angular.module('herokuApp.controllers', [])
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.message = "Hello From Angular";
    }])