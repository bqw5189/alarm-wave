// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('bmc', {
      url: '/bmc',
      templateUrl: 'templates/bmc.html'
    })
  .state('bmc.index', {
      url: '/index',
      templateUrl: 'templates/alarm-index.html',
      controller: 'ChatsCtrl'
    })
  .state('bmc.alarms', {
      url: '/alarms',
      templateUrl: 'templates/alarm-list.html'
    })
    .state('bmc.detail', {
      url: '/alarms/:chatId',
      templateUrl: 'templates/alarm-detail.html',
      controller: 'ChatDetailCtrl'
      
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/bmc/index');

});
