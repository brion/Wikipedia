// ...
console.log('WinPhone platform.js');

//$('<script>').attr('src', 'winphone/cordova-1.6.1.js').appendTo('html');
document.write('<script src="winphone/cordova-1.6.1.js"></script>');

// http://bugs.jquery.com/ticket/10660
$.support.cors = true;


// use iscroll
	chrome.setupScrolling = function(selector) {
		console.log("MODIFIED!");
		var $el = $(selector);
		var scroller = $el[0].scroller;
		if (scroller) {
			window.setTimeout(function() {
				scroller.refresh();
				console.log("Refreshing!");
			}, 200); // HACK: Making this zero does do the refresh properly
			// Quite possibly that the DOM takes a while to actually settle down
		} else {
			scroller = new iScroll($el[0]);
			$el[0].scroller = scroller;
		}
	}

	chrome.scrollTo = function(selector, offsetY) {
		var $el = $(selector);
		var scroller = $el[0].scroller;
		if(scroller) {
			scroller.scrollTo(0, offsetY, 200);
		}
	};
