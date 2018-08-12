app.controller('workoutsCtrl', function($scope, usr, $location){
    //if user logged in
    $scope.isUserLoggedIn = function() {
        return usr.isLoggedIn();
    }

    
});