
angular.module('starter.controllers', ['starter.services','ionic', 'ngCordova'])

.controller('LoginCtrl', function($scope, LoginSer,$ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function(username) {
       LoginSer.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            //$state.go('register');
          // window.open('');
           var alertPopup = $ionicPopup.alert({
               title: 'login Success!',
               template: 'Successful'
           });
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'login failed!',
                template: 'check your credentials!'
            });
        });



    }

    $scope.signup =function()
    {
        $state.go('register');
    }




}
)



.controller('RegisterCtrl', function($scope, RegSer, $ionicPopup, $state) {
    $scope.data = {};

    $scope.register = function(email){

            RegSer.RegisterUser($scope.data.firstname, $scope.data.email, $scope.data.username, $scope.data.password ).success(function(data) {
           //alert(data.lastname);
                $state.go('login');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
});
