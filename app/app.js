var app = angular.module('activity-monitor', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/signin", {
        templateUrl: "signin.html",
        controller: "signinCtrl"
    })
    .when("/signup", {

    })
    .when("profile/:profileId", {

    })
    .when("workout/:workoutId", {
        
    })
    .otherwise({
        redirectTo:"/"
    })
});