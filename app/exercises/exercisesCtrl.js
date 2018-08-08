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

    $scope.isNewExercise = false;

    $scope.createExercise = function(){
        exercises.createExercise({
            //id:$scope.id,
            name: $scope.name, 
            description: $scope.description, 
            type: $scope.type,
            joint: $scope.joint,
            muscles: $scope.muscles,
            variations: $scope.variations,
            comments: $scope.comments,
            videoUrl: $scope.videoUrl,
            imageUrl: $scope.imageUrl

        }).then(function(){
            $location.path("/exercises");
        }, function(err){
            $log.log(err);
        })
    }
});