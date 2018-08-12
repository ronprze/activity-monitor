app.factory('exercises', function($http, $q){
    var exercisesURL = "https://my-json-server.typicode.com/ronprze/activity-monitor/exercises/";

    function Exercise(plainExe){
        this.id = plainExe.id;
        this.name = plainExe.name;
        this.description = plainExe.description;
        this.comment = plainExe.details.comment;
        if (plainExe.details.imageUrl === ""){
            this.imageUrl = "images/am_exe_placeholder.png";
        } else {
            this.imageUrl = plainExe.details.imageUrl;
        } 
        this.videoUrl = plainExe.details.videoUrl;
    }

    function getAllExercises(){
        var async = $q.defer();

        $http.get(exercisesURL).then(function(response){
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

    function editExercise(exercise){
        
    }


    function createExercise(exercise){
        var async = $q.defer();

        $http.post(exercisesURL, exercise).then(function(response){
            var exercise = new Exercise(response.data);
            async.resolve(exercise);
        }, function(err){
           async.reject(err); 
        })

        return async.promise;
    }

    function getExerciseById(exeId){
        var async = $q.defer();
        var exerciseURL = exercisesURL + "?id=" + exeId;

        $http.get(exerciseURL).then(function(response){
            var exercise = new Exercise(response.data);
            async.resolve(exercise);
        }, function(err){
            async.reject(err);
        })

        return async.promise;
    }

    return {
        getAllExercises : getAllExercises,
        editExercise : editExercise,
        createExercise : createExercise,
        getExerciseById : getExerciseById
    }
});