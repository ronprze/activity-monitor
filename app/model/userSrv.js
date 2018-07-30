app.factory('user', function($http, $q){
    var activeUser = {};

    function User(plainUser){
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.id = plainUser.id;
    }

    function login(email, password){
        var async = $q.defer();

        var loginURL = "https://my-json-server.typicode.com/ronprze/activity-monitor/users/1"; // + email + "&password=" + password
        $http.get(loginURL).then(function(response){
            if (response.data.email === email && response.data.password === password){
                activeUser = new User(response.data);
                async.resolve(activeUser);
            } else {
                async.reject("Invalid User credentials");
            }
        }, function(err){
            async.reject(err);
        });

        return async.promis;
    }

    function isUserLoggedIn(){
        return activeUser ? true : false;
    }

    function logOut(){
        activeUser = null;
    }

    function getActiveUser(){
        return activeUser;
    }

    return {
        login : login,
        logOut : logOut,
        isUserLoggedIn : isUserLoggedIn,
        getActiveUser : getActiveUser
    }
});