
app.controller("navbarCtrl", function($scope, usr, $location){
    $scope.isUserLoggedIn = function() {
        return usr.isLoggedIn();
    }

    $scope.logout = function() {
        usr.logout();
        $location.path("/");
        //add clear session methods
    }
});