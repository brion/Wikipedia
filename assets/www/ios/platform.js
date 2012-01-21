// iOS+PhoneGap-specific setup

// @Override
menu.popupMenu = function(items, callback, options) {
	if (options.origin) {
		var $origin = $(options.origin),
			pos = $origin.offset();
		options.left = pos.left;
		options.top = 0; // hack pos.top;
		options.width = $origin.width();
		options.height = $origin.height();
	}
	window.plugins.actionSheet.create('', items, callback, options);
}