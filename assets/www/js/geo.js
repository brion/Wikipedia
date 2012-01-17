var geomap = false;

function getCurrentPosition() {
	hideOverlayDivs();
	hideContentIfNeeded();
	$("#nearby-overlay").localize().show();
	setActiveState();

	if (!geomap) {
		geomap = new L.Map('map');
		var tiles = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; 2011 OpenStreetMap contributors'
		});
		geomap.addLayer(tiles);

		// @fixme load last-seen coordinates
		geomap.setView(new L.LatLng(0, 0), 13);
	}

	navigator.geolocation.getCurrentPosition(function(pos) {
		geomap.setView(new L.LatLng(pos.coords.latitude, pos.coords.longitude), 13);
	});
}

