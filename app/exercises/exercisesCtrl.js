app.controller('exercisesCtrl', function($scope, $location, exercises, usr, $log){
    // Checking if the user is logged in, 
    //if not navigating back to home page
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    //get all Exercises
    exercises.getAllExercises().then(function(exercises){
        $scope.exercises = exercises;
    }, function(err){
        $log.logs(err);
    });

    $scope.openExerciseDetails = function(exercise){
        var id = $scope.exercise.id;
        $location.path("/exercises" + id);
    }

});