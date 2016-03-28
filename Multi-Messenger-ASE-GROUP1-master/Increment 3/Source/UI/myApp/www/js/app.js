// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller:'HomeCtrl'
  })
      .state('test', {
      url: '/test',
      templateUrl: 'templates/test.html'
     // controller:'testCtrl'

  })
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller:'LoginCtrl'

  })
  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html'
     // controller:'testCtrl'

  })

    .state('contacts', {
      url: '/contacts',
      templateUrl: 'templates/contacts.html',
      controller:'ContactsCtrl'

    })

    .state('chatting', {
      url: '/chatting',
      templateUrl: 'templates/chatting.html',
      //controller:'ContactsCtrl'

    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
