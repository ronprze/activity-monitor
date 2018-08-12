app.controller('exerciseDetailsCtrl',function($scope, $location, exercises, usr, $routeParams){
    // Checking if the user is logged in, 
    //if not navigating back to home page
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    //get Exercise details by exercise ID
    exercises.getAllExercises().then(function() {
        $scope.exercise = exercises.getExerciseById($routeParams.id);
    });

    //get Exercise details by exercise ID
    /* exercises.getExerciseById($routeParams.id).then(function(response){
        $scope.exercise = response;
    }, function(err){
        console.log(err);
    }); */
    
});