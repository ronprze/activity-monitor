app.controller('exercisesCtrl', function($scope, $location, exercises, usr, $log){
    // Checking if the user is logged in, 
    //if not navigating back to home page
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    //$scope.isNewExe = false;

    //get all Exercises
    exercises.getAllExercises().then(function(exercises){
        $scope.exercises = exercises;
    }, function(err){
        $log.logs(err);
    });

    //get Exercise details


    $scope.createExercise = function(){
        /* name = "";
        description = "";
        comments = "";
        videoUrl = "";
        imageUrl = ""; */

        exercises.createExercise({
            name: $scope.name, 
            description: $scope.description, 
            comments: $scope.comments,
            videoUrl: $scope.videoUrl,
            imageUrl: $scope.imageUrl

        }).then(function(){
            $location.path("/exercises");
        }, function(err){
            $log.log(err);
        });
    }
});