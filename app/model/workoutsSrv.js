app.factory('workouts', function($http, $q, exercises, $log){
    var workoutsUrl = "https://my-json-server.typicode.com/ronprze/activity-monitor/workouts/";
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

    function getAllWorkouts(){
        var async = $q.defer();

        $http.get(workoutsUrl).then(function(response){
            response.dete.forEach(function(workout){
                workouts.push(new Workout(workout));
            })
            async.resolve(workouts);
        }, function(err){
            $log.error(err);
        });

        return async.promise;
    }

    function getWorkoutById(workouts, woId){
        for (var i = 0; i < workouts.length; i++){
            if (workouts[i].id === woId){
                wo = workouts[i];
            }
        }

        return wo;
    }

    return {
        getAllWorkouts : getAllWorkouts,
        getWorkoutById : getWorkoutById
    }
});