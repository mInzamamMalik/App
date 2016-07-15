angular.module('starter.controllers', [])

  .controller('AppCtrl', function (PlayListService, $scope, $rootScope) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.playlists = PlayListService.getPlayList();
    console.log(PlayListService.getPlayList());

    $rootScope.showHeader = true;

  })

  .controller('PlaylistsCtrl', function ($scope) {

  })
  .controller('PlaylistCtrl', function ($scope, $stateParams, PlayListService, $interval, $rootScope) {
    console.log($stateParams.playlistId);
    var id = $stateParams.playlistId;
    var data = PlayListService.getPlayList();
    $scope.imageUrl = data[id].url;
    $scope.playClip = function () {
      $scope.duration = 1000;
      var myDataLength = Object.keys(data).length;
      var count = 1;
      var stop = $interval(function () {
        console.log(data[count].url);
        $scope.imageUrl = data[count].url;
        //$scope.imageUrl = data[count].url;
        if (myDataLength <= count) {
          $interval.cancel(stop);
          stop = null;
        }
        count++;
      }, 1000);
    }

    $scope.ExpandClip = function () {
     
       $rootScope.showHeader = false;
    
      console.log('expend');
    }
  })
  .factory('PlayListService', function () {
    return {
      getPlayList: function () {
        var list = {
          1: { title: 'Reggae', url: './../img/1.jpg' },
          2: { title: 'Chill', url: './../img/2.jpg' },
          3: { title: 'Chill', url: './../img/3.jpg' },
        }
        return list;
      }
    }
  })
