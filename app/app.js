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
    .when("/profile", {
        templateUrl: "app/profile/profile.html",
        controller : "profileCtrl"
    })
    .when("/workouts", {
        templateUrl: "app/workouts/workouts.html",
        controller : "woCtrl"
    })
    .when("newWorkout", {
        templateUrl: "app/workouts/newWorkout.html"
    })
    .when("/exercises", {
        templateUrl: "app/exercises/exercises.html",
        controller : "exercisesCtrl"   
    })
    .when("/exercises/:id", {
        templateUrl: "app/exercises/exerciseDetails.html",
        controller : "exerciseDetailsCtrl"
    })
    .when("/newExercise", {
        templateUrl: "app/exercises/newExercise.html",
        controller : "newExerciseCtrl"
    })
    .otherwise({
        redirectTo: "/"
    })
});