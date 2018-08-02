app.controller('excersiesCtrl', function($scope, $location, exercises, usr){
    // Checking if the user is logged in, if not navigating back to home page
    if (!usr.isLoggedIn()) {
        $location.path("/");
        return;
    }

    //get all Exercises
    $scope
});