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
        templateUrl: "app/dashboard/dashboard.html",
        controller : "dashboardCtrl"
    })
    .when("/profile", {
        templateUrl: "app/profile/profile.html",
        controller : "profileCtrl"
    })
    .when("/workouts", {
        templateUrl: "app/workouts/workouts.html",
        controller : "workoutsCtrl"
    })
    .when("/exercises", {
        templateUrl: "app/exercises/exercises.html",
        controller : "exercisesCtrl"   
    })
    .when("/exercises/:id", {
        templateUrl: "app/exercises/exerciseDetails.html",
        controller : "exercisesCtrl"
    })
    .when("/exercises/newExcersize", {
        templateUrl: "app/exercises/newExercise.html",
        controller : "newExerciseCtrl"
    })
    .otherwise({
        redirectTo: "/"
    })
});