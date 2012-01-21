// Web platform
//
// Works in Chrome with --disable-web-security
// But, uh, never use that mode for real huh? :)

// @todo need menus!

window.addEventListener('load', function() {
	chrome.initialize();
}, true);


// @Override
function getPhoneGapVersion(callback, error) {
	callback('n/a');
}
