'use strict';

/* Controllers */
var linkedInApp = angular.module('myApp', []);

linkedInApp.controller('LinkedInCtrl', function ($scope, $http) {
    $http.get('profile.json').success(function(data) {
        $scope.profile = data;
    });
});