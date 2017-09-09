// JavaScript Code goes here
var MainController = function($scope, $http) {

    var onUserComplete = function(response){
        $scope.user = response.data;
    };

    $http.get("https://api.github.com/users/nastanford")
         .then(onUserComplete);

    $scope.message = "Hello, Angular Beginner!";

}