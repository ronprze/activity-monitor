app.factory('exercises', function($http, $q){
var appUrl = "https://my-json-server.typicode.com/ronprze/activity-monitor/"

    function Exercise(plainExe){
        this.id = plainExe.id;
        this.name = plainExe.name;
        this.description = plainExe.description;
        this.comment = plainExe.comment;
        this.imageUrl = plainExe.imageUrl;
        this.videoUrl = plainExe.videoUrl;
    }

    function getAllExercises(){
        var async = $q.defer();

        var exercisesURL = appUrl + "exercises";
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

        var exercisesURL = appUrl + "exercises";
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
        var exerciseURL = appUrl + "exercises/?id=" + exeId;

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