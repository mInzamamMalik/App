// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }).config(function ($ionicConfigProvider) {
    $ionicConfigProvider.views.transition('none');
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
       abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
     })
      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists/1');
  })

  // .directive('backImg', function () {
  //   console.log('run');
  //   return {
  //     restrict: "A",
  //     link: function (scope, elem, attr) {
  //       attr.$observe('backImg', function (url) {
  //         elem.css({
  //           'background-image': "url(" + url + ")",
  //           'background-size': 'cover',
  //           'min-width': '100%',
  //           'min-height': '100%',
  //           'background-attachment': 'scroll',
            
  //         });
  //       });
  //       var url = attr.backImg;
  //       // elem.text(scope);
  //       // console.log(scope);
  //      },
  //     controller: function () {

  //     }
  //   }
  // })


  // .directive('backImg', function () {
  //   console.log('run');
  //   return {
  //     scope: {
  //        'imageUrl' :  '@'
  //     } ,
  //     link : function (scope, elem, attr) {
  //       var url = attr.backImg;
  //       console.log(attr);
  //       elem.css({
  //         'background-image': "url(" + url + ")",
  //         'background-size': 'cover',
  //         'min-width': '100%',
  //         'min-height': '100%',
  //         'background-attachment': 'scroll'
  //       });
  //     },
  //     template : '<b>imageUrl</b>'
  //   }
  // })