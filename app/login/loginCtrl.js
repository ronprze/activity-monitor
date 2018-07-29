app.controller('loginCtrl', function($scope, user, $location){
    $scope.email = "";
    //$scope.username = "";
    $scope.password = "";
    $scope.invalidLogin = false;

    $scope.login = function(){
        user.login($scope.email, $scope.password).then(function(activeUser){
            $location.path("/");
        }, function(){
            $scope.invalidLogin = true;
        })
    }
});