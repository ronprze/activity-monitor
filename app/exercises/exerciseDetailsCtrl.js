app.controller('exerciseDetailsCtrl',function($scope, $location, exercises, usr, $routeParams, $sce){
    // Checking if the user is logged in, 
    //if not navigating back to home page
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    //get Exercise details by exercise ID   
    exercises.getExerciseById($routeParams.id).then(function(response){
        $scope.exercise = response[0]; //change the service to return an object
        $scope.videoUrl = $sce.trustAsResourceUrl($scope.exercise.details.videoUrl);
        $scope.isVideoUrl = function(){
            return ($scope.exercise.details.videoUrl !== "") ? true:false;
        }
    });

});