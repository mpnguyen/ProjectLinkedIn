'use strict';

/* Controllers */
var linkedInApp = angular.module('myApp', []);

linkedInApp.controller('LinkedInCtrl', function ($scope, $http) {
    $http.get('profile.json').success(function(data) {
        $scope.profile = data;
    });
    
    $scope.deleteSkill = function(skill) {
        var index = $scope.profile.skills.indexOf(skill);
        $scope.profile.skills.splice(index,1);
    };
    
    $scope.addNewSkill = function() {
        $scope.profile.skills.push(
            {
                "score": "00",
                "skillname": "new skill.."
            }
        );
    };
    
    $scope.deleteOtherSkill = function(skill) {
        var index = $scope.profile.others.indexOf(skill);
        $scope.profile.others.splice(index,1);
    };
    
    $scope.addNewOtherSkill = function() {
        $scope.profile.others.push(
            {
                "score": "00",
                "skillname": "new skill.."
            }
        );
    };
    
    $scope.isVisible = "hidden";
    
    $scope.editData = function() {
        if ($scope.isVisible == "")
            $scope.isVisible = "hidden";
        else 
            $scope.isVisible = "";
    };
});