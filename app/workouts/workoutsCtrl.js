app.controller('workoutsCtrl', function($scope, usr, $location, workouts, $log){
    //if user logged in
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    workouts.getAllWorkouts().then(function(response){
        $scope.workouts = response;
    }, function(err){
        $log.error(err);
    });
});