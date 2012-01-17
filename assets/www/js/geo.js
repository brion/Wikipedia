function getCurrentPosition() {
	hideOverlayDivs();
	hideContentIfNeeded();
	$("#nearby-overlay").localize().show();
	setActiveState();

	var map = new L.Map('map');
	
}

