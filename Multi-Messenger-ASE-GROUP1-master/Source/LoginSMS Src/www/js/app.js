// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'starter.services' ])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('SMSController', function($scope, $cordovaSms) {
        $scope.sms = {
            number: '0959052082',
            message: 'This is some dummy text'
        };

        document.addEventListener("deviceready", function() {

            var options = {
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                    intent: '' // send SMS with the native android SMS messaging
                    //intent: '' // send SMS without open any other app
                    //intent: 'INTENT' // send SMS inside a default SMS app
                }
            };

            $scope.sendSMS = function() {

                $cordovaSms
                    .send('0959052082', 'This is some dummy text', options)
                    .then(function() {
                        alert('Success');
                        // Success! SMS was sent
                    }, function(error) {
                        alert('Error');
                        // An error occurred
                    });
            }
        });
    })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
