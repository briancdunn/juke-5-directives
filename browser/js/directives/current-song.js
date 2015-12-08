app.directive('currentSong', function () {
  return {
    restrict: 'E',
    template: '<span> <p style="margin-right: 3px; margin-bottom: 0px;"> {{ getCurrentSong().name }} </p> <p style="margin-right: 3px;"> {{ getCurrentSong().artists[0].name }} </p> </span>'
    // scope: {
    //   func: "=" 
    // }

  };
});