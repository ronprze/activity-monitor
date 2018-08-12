app.controller('newExerciseCtrl',function($scope, $location, exercises, usr, $log){
    // Checking if the user is logged in, 
    //if not navigating back to home page
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.Exercise = function(){
        var name = "";
        var description = "";
        var comments = "";
        var videoUrl = "";
        var imageUrl = "";
    }

    $scope.createExercise = function(){

        exercises.createExercise({
            id:$scope.id,
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