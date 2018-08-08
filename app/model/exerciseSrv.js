app.factory('exercises', function($http, $q){
    function Exercise(plainExe){
        this.id = plainExe.id;
        this.name = plainExe.name;
        this.description = plainExe.description;
        this.imageUrl = plainExe.imageUrl;
    }

    function getExercises(){
        var async = $q.defer();

        var exerciseURL = "https://my-json-server.typicode.com/ronprze/activity-monitor/exercises";
        $http.get(exerciseURL).then(function(response){
            var exercises = [];
            response.data.forEach(function(exercise) {
                exercises.push(new Exercise(exercise));
            })
            async.resolve(exercises);
        }, function(err){
            async.reject(err);
        })

        return async.promise;
    }

    function setExercise(){
        
    }

    function addExercise(){

    }

    function createExercise(){

    }

    return {
        getExercises : getExercises,
        setExercise : setExercise,
        addExercise :addExercise,
        createExercise: createExercise
    }
});