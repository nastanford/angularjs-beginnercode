(function() {
    
      var app = angular.module("githubViewer", []);
    
      var MainController = function($scope, $http) {
    
        var onUserComplete = function(response) {
          $scope.user = response.data;
        };
    
        var onError = function(response) {
          $scope.error = "Could not fetch the user.";
        };
    
        $http.get("https://api.github.com/users/nastanford")
          .then(onUserComplete, onError);
    
        $scope.message = "Hello, Angular Beginner!";
    
      };
    
      app.controller("MainController", MainController);
    
    }());