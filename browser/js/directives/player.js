app.directive('player', function (PlayerFactory) {
  //DDO - directive definition object
  return {
    restrict: 'E', //E means element
    templateUrl: '/templates/player.html',
    link: function (scope, element, attrs) {
      scope.getCurrentSong = PlayerFactory.getCurrentSong;
      scope.isPlaying = PlayerFactory.isPlaying;
      scope.forward = PlayerFactory.next;
      scope.back = PlayerFactory.previous;

      scope.getPercent = function () {
        return (100 * PlayerFactory.getProgress()) + '%';
      };

      scope.toggle = function () {
        if (PlayerFactory.isPlaying()) PlayerFactory.pause();
        else PlayerFactory.resume();
      };
    }
  };
});
