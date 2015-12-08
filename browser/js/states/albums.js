app.config(function ($stateProvider) {
	$stateProvider.state('albums', {
		url: '/albums',
		template: '<album-list albums="albums"></album-list>',
		controller: 'AlbumsCtrl',
		resolve: {
			allAlbums: function (AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		}
	});
});