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
    .when("profile/:profileId", {

    })
    .when("workout/:workoutId", {
        
    })
    .otherwise({
        redirectTo:"/"
    })
});