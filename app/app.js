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
        templateUrl: "app/profile/:profileId/profile.html"
        
    })
    .when("workouts/", {
        templateUrl: "app/workouts/workouts.html"

    })
    .when("exercises", {
        templateUrl: "app/exercise/exercises.html"

    })
    .otherwise({
        redirectTo:"/"
    })
});