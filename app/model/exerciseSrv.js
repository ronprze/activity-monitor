app.factory('exercises', function($http, $q, $log){
    var exercisesURL = "https://my-json-server.typicode.com/ronprze/activity-monitor/exercises/";
    var exercises = [];
    var wasLoaded = false;

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

        if (wasLoaded){
            async.resolve(exercises)
        } else {
            exercises.splice(0, exercises.length);

            $http.get(exercisesURL).then(function(response){
                response.data.forEach(function(exercise) {
                    exercises.push(new Exercise(exercise));
                })
                wasLoaded = true;
                async.resolve(exercises);

            }, function(err){
                $log.error(err);
                async.reject(err);
            })
        }
        
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
            var exe = response.data;
            async.resolve(exe);
        }, function(err){
            $log.error(err);
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