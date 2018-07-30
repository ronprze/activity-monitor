app.factory('usr', function($http, $q){
    var activeUser = null; //new User({fname:"ron", lname:"pe", email:"r@r.com", id:1});

    function User(plainUser){
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.id = plainUser.id;
    }

    function login(email, password){
        var async = $q.defer();

        var loginURL = "https://my-json-server.typicode.com/ronprze/activity-monitor/users"; // + email + "&password=" + password
        $http.get(loginURL).then(function(response){
            for (var i = 0; i < response.data.length; i++){
                if (response.data[i].email === email && response.data[i].password === password){
                    activeUser = new User(response.data[i]);
                    async.resolve(activeUser);
                    break;
                } else {
                    async.reject("Invalid User credentials");
                }
            }
        }, function(err){
            async.reject(err);
        });

        return async.promise;
    }

    function isLoggedIn(){
        return activeUser ? true : false;
    }

    function logout(){
        activeUser = null;
    }

    function getActiveUser(){
        return activeUser;
    }

    return {
        login : login,
        logout : logout,
        isLoggedIn : isLoggedIn,
        getActiveUser : getActiveUser
    }
});