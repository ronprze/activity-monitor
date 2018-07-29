app.factory('user', function($http, $q){
    var activeUser = null;

    function User(plainUser){
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = package.email;
        this.id = plainUser.id;
    }

    function login(email, password){
        var async = $q.defer();

        var loginURL = "https://my-json-server.typicode.com/ronprze/activity-monitor/Users"; // + email + "&password=" + password
        $http.get('/db.json').then(function(response){
            if (response.data.users.length > 0){
                activeUser = new User(response.data.users[0]);
                async.resolve(activeUser);
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