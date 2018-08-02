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
        templateUrl: "app/dashboard/dashboard.html"
        
    })
    .when("profile/:profileId", {
        templateUrl: "app/profile/:profileId/profile.html"
        
    })
    .when("workouts/", {
        templateUrl: "app/workouts/workouts.html",
        controller : "workoutsCtrl"
    })
    .when("exercises", {
        templateUrl: "app/exercises/exercises.html",
        controller : "exercisesCtrl"
    })
    .otherwise({
        redirectTo:"/"
    })
});