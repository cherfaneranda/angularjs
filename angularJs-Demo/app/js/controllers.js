'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyCtrl3', [function() {

  }])
  .controller('ListCtrl', function($scope, Projects) {
    $scope.projects =  [
               { name: 'Dave Jones', city: 'Phoenix'},
               { name: 'Jamie Riley', city: 'Atlanta'},
               { name: 'Heedy Wahlin', city: 'Chandler'},
               { name: 'Thomas Winter', city: 'Seattle'}
           ];
    })
     
    .controller('CreateCtrl', function($scope, $location, $timeout, Projects) {
    $scope.save = function() {
    Projects.$add($scope.project, function() {
    $timeout(function() { $location.path('/'); });
    });
    };
    })
     
    .controller('EditCtrl',
    function($scope, $location, $routeParams, $firebase, fbURL) {
    var projectUrl = fbURL + $routeParams.projectId;
    $scope.project = $firebase(new Firebase(projectUrl));
     
    $scope.destroy = function() {
    $scope.project.$remove();
    $location.path('/');
    };
     
    $scope.save = function() {
    $scope.project.$save();
    $location.path('/');
    };
    });