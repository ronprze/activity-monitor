var app = angular.module('activity-monitor', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    })
    .when("/signup", {
        
    })
    .when("/dashboard", {
        templateUrl: "app/profile/:profileId/dashboard.html"
        
    })
    .when("profile/:profileId", {
        templateUrl: "app/profile/:profileId/dashboard.html"
        
    })
    .when("workout/:workoutId", {
        
    })
    .otherwise({
        redirectTo:"/"
    })
});