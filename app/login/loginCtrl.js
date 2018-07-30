app.controller('loginCtrl', function($scope, user, $location){
    $scope.email = "";
    //$scope.username = "";
    $scope.password = "";
    $scope.invalidLogin = false;

    $scope.login = function(){
        user.login($scope.email, $scope.password).then(function(activeUser){
            $location.path("app/profile/:profileId/dashboard.html");
        }, function(){
            $scope.invalidLogin = true;
        })
    }
});