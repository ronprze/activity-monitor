app.controller('exercisesCtrl', function($scope, $location, exercises, usr, $log){
    // Checking if the user is logged in, 
    //if not navigating back to home page
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    //get all Exercises
    exercises.getExercises().then(function(exercises){
        $scope.exercises = exercises;
    }, function(err){
        $log.logs(err);
    });

    //get Exercise details
    
});