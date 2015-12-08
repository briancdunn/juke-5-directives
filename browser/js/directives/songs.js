app.directive('songs',function(PlayerFactory) {
  return {
    restrict: 'E',
    scope: {
      songs: '='
    },
    templateUrl: '/templates/songs.html',
    link: function(scope,element,attrs) {
        scope.isCurrent = function (song) {
          var current = PlayerFactory.getCurrentSong();
          return current && current._id == song._id;
        };

        scope.start = function (song) {
          PlayerFactory.start(song, scope.songs);
          return "ran "+ song;
        };
    }
  };
})