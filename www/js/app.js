// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic', 'contact', 'map', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
    url: '/home',
    // abstract: true,
    templateUrl: 'templates/home.html'
    })
    .state('home.landing',{
      url: '/landing',
      views: {
        'nav1': {
          templateUrl: 'templates/landing.html'
        }
      }
    })
    .state('home.contacts',{
      url: '/contacts',
      views: {
        'nav1':{
          templateUrl: 'templates/contacts.html',
          controller: 'contactsCtrl'
        }
      }
    })
    .state('home.map', {
      url: '/map',
      views: {
        'nav1': {
          templateUrl: 'templates/map/map.html',
          controller: 'mapCtrl'
        }
      }
    })
    .state('home.search',{
      url: '/search',
      views: {
        'nav1': {
            templateUrl: 'templates/search.html'
          }
        }

    })

  $urlRouterProvider.otherwise('/home/landing');
})
