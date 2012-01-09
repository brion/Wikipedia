
/**
 * Protocol-relative data will break against our 'file://' pages :)
 * @param url string
 * @returns string
 */
function processLanguageUrl(url) {
	if (url.substr(0, 2) == '//') {
		url = 'https:' + url;
	}
	return url;
}

/**
 * Format the language list in the same style as saved pages & history,
 * pulling link data from the iframe.
 */
function langLinkSelector(languages) {
	var $list = $('#langList').empty();

	$.each(languages, function(i, lang) {
		$("<div class='listItemContainer'>" +
			"<a class='listItem'>" +
			"<span class='text'></span>" +
			"</a>" +
			"</div>")
		.find('.text')
			.text(lang.name)
			.end()
		.find('a')
			.bind('touchstart', function() {
				// Note that click() sometimes gives a mismatched result on Android 4, so using touchstart/touchend. 
				e.preventDefault();
			})
			.bind('touchend', function() {
				app.navigateToPage(lang.url);
				hideOverlays();
				e.preventDefault();
			})
			.end()
		.appendTo($list);
	});
}

function selectLanguage() {
	langLinkSelector(app.getLangLinks());

	hideOverlayDivs();
	$('#langlinks').localize().show();
	hideContent();
	
	setActiveState();	
}
