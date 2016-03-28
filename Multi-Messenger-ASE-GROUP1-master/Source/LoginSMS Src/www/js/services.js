angular.module('starter.services', ['ionic', 'ngCordova'])
.service('LoginSer', function($q, $http) {
    return {
  loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
      $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
             $http({
        method: 'GET',
        url: 'https://api.mongolab.com/api/1/databases/aseproject/collections/users?q={username:\''+name+'\'}&apiKey=UqL5pHu1cpNVZciu9DjGsKcmiCLuTpkI',
        contentType:"application/json"

    }).success(function(data){
      if (name == data[0].username && pw == data[0].password) {
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('Username and Password does not matchs');
            }

    })
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;


        }
    }
})




.service('RegSer', function($q, $http) {
    return {
        RegisterUser: function(fname, email, username, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            $http.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST';
            $http.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
          //  $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
          $http({
        method: 'POST',
        url: 'https://api.mongolab.com/api/1/databases/aseproject/collections/users?apiKey=UqL5pHu1cpNVZciu9DjGsKcmiCLuTpkI',
        data: JSON.stringify({
       firstname: fname,
        email: email,
        username: username,
        password: password,
    }),
        contentType:"application/json"

    }).success(function(data){

            // alert(data);
              deferred.resolve('Welcome!');
            /* if ( data[0].username != null && data[0].password != null && data[0].lastname != null && data[0].firstname != null &&data[0].email != null ) {
                deferred.resolve('Welcome ' + data[0].username + '!');
            } else {
                deferred.reject('please fill all the fields');
            }
              */

    })
           promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
    }
});
