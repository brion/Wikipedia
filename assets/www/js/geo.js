function getCurrentPosition() {
	hideOverlayDivs();
	hideContentIfNeeded();
	$("#nearby-overlay").localize().show();
	setActiveState();

	var map = new L.Map('map');
	var tiles = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; 2011 OpenStreetMap contributors'
	});

	// @fixme load last-seen coordinates
	map.setView(new L.LatLng(0, 0), 13);
	map.addLayer(tiles);

	navigator.geolocation.getCurrentPosition(function(pos) {
		map.setView(new L.LatLng(pos.coords.latitude, pos.coords.longitude), 13);
	});
}

