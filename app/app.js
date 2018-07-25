var app = angular.module('activity-monitor', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "home.html"
    })
    .when("/login", {
        templateUrl: "login.html",
        controller: "loginCtrl"
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