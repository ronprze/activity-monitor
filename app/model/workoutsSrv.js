app.factory('workouts', function($http, $q, exercises){
    

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



        return async.promise;
    }

    return {
        getAllWorkouts : getAllWorkouts
    }
});