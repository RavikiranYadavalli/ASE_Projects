angular.module('starter.controllers', ['ngSanitize'])
    //beginning of home controllers
    .controller('LoginCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {

   // $scope.data = {};
  $scope.pageClass = 'login';
    $scope.login = function(username,password) {
      $state.go('home');
 /*       //console.log("inside login function");
        //inside.getMethod();
        $http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

    contentType: "application/json"
}).success(function(response) {
     var list=response;
    for(i=0;i<list.length;i++){
         if((list[i].username==username) && (list[i].password==password))
        {
           localStorage.setItem("username",list[i].username);
            localStorage.setItem("id_user",list[i]._id.$oid);
            //alert("Login success");
            //location.href="home.html";
            console.log("inside if loop");
            $state.go('home');
        }
        else{
            //alert("Incorrect username/password");
              console.log("inside else loop");
      document.getElementById('x').innerHTML="Invalid Inputs";
         }
    }
        })
            //$state.go('firebase');
        //location.href="templates/firebase.html";
*/
    }

})
  //begin of contacts controller
  .controller('ContactsCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {

    // $scope.data = {};
    $scope.pageClass = 'contacts';
   /* $scope.login = function(username,password) {
      //console.log("inside login function");
      //inside.getMethod();
      $http({
        method: 'GET',
        url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',

        contentType: "application/json"
      }).success(function(response) {
        var list=response;
        for(i=0;i<list.length;i++){
          if((list[i].username==username) && (list[i].password==password))
          {
            localStorage.setItem("username",list[i].username);
            localStorage.setItem("id_user",list[i]._id.$oid);
            //alert("Login success");
            //location.href="home.html";
            console.log("inside if loop");
            $state.go('home');
          }
          else{
            //alert("Incorrect username/password");
            console.log("inside else loop");
            document.getElementById('x').innerHTML="Invalid Inputs";
          }
        }
      })
      //$state.go('firebase');
      //location.href="templates/firebase.html";

    }*/

    $scope.home = function() {

      $state.go('home');



    }

  })
  // end of contacts controller
// begin of home controller
  .controller('HomeCtrl', function($scope, $state,$http,$window,$httpParamSerializerJQLike) {

    // $scope.data = {};
    $scope.pageClass = 'contacts';
    $scope.Logout = function() {

     // $state.go('index');



    }

  })




 //*************************************//

;
