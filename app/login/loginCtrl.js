app.controller('loginCtrl', function($scope, usr, $location){
    $scope.email = "";
    $scope.password = "";
    $scope.invalidLogin = false;

    $scope.login = function(){
        $scope.invalidLogin = false;
        usr.login($scope.email, $scope.password).then(function(activeUser){
            $location.path("app/profile/:profileId/dashboard.html");
        }, function(){
            $scope.invalidLogin = true;
        })
    }
});