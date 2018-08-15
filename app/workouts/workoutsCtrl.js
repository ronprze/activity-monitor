app.controller('woCtrl', function($scope, usr, $location, workouts, $log){
    
    //if user logged in
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.workouts = [];

    workouts.getAllWorkouts().then(function(response){
        $scope.workouts = response;
    }, function(err){
        $log.error(err);
    });
});