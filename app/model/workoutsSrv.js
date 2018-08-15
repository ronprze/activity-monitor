app.factory('workouts', function($http, $q, $log, users){
    var workoutsUrl = "https://my-json-server.typicode.com/ronprze/activity-monitor/workouts" //+
                                //"?userId=" + users.getActiveUser().id;
    var workouts = [];
    var wo = {};
    var wasLoaded = false;

    //workout constructor
    function Workout(plainWO){
        this.id = plainWO.id;
        if (plainWO.name === ""){
            this.name = new Date().getDay;
        } else {
            this.name = plainWO.name;
        }
        
    }

    function getActiveUserWorkouts(){
        var async = $q.defer();
        //var activeUserWOUrl = workoutsUrl; // + "?userId=" + users.getActiveUser().id

        $http.get(workoutsUrl).then(function(response){
            response.data.forEach(function(workout){
                workouts.push(new Workout(workout));
            })
            async.resolve(workouts);
        }, function(err){
            $log.error(err);
        });

        return async.promise;
    }

    function getActiveUseWorkoutById(workouts, woId){
        for (var i = 0; i < workouts.length; i++){
            if (workouts[i].id === woId && workouts[i].userId === users.getActiveUser().id){
                wo = workouts[i];
            }
        }

        return wo;
    }

    return {
        getActiveUserWorkouts : getActiveUserWorkouts,
        getActiveUseWorkoutById : getActiveUseWorkoutById
    }
});