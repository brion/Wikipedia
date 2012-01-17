// Web platform
//
// Works in Chrome with --disable-web-security
// But, uh, never use that mode for real huh? :)

// @todo need menus!

window.addEventListener('load', function() {
	onDeviceReady();
}, true);

function updateMenuState() {
	var items = [
		{
			id: 'menu-language',
			label: mw.msg('menu-language'),
			action: selectLanguage
		},
		{
			id: 'menu-savePage',
			label: mw.msg('menu-savePage'),
			action: savePage,
		},
		{
			id: 'menu-sharePage',
			label: mw.msg('menu-sharePage'),
			action: sharePage
		},
		{
			id: 'menu-overflow',
			action: overflowMenu
		}
	];
	$('#menu').remove();
	var $menu = $('<div>');
	$menu
		.attr('id', 'menu')
		.appendTo('body');

	$.each(items, function(i, item) {
		if (i > 0) {
			$('<span class="sep"></span>').appendTo($menu);
		}
		var $button = $('<button>');
		$button
			.attr('id', item.id)
			.click(function() {
				item.action();
			})
			.append('<span>')
			.appendTo($menu);
		if ('label' in item) {
			var $label = $('<label>');
			$label
				.attr('for', item.id)
				.text(item.label)
				.appendTo($menu);
		}
	});
};

// @Override
function getPhoneGapVersion(callback, error) {
	callback('n/a');
}

// @Override
function popupMenu(items, callback, options) {
	options = $.extend({destructiveButtonIndex: null, cancelButtonIndex: null}, options || {});

	var $bg = $('<div class="actionsheet-bg"></div>').appendTo('body'),
		$sheet = $('<div class="actionsheet"></div>').appendTo('body');
	$.each(items, function(index, label) {
		var $button = $('<button>')
			.text(label)
			.appendTo($sheet)
			.click(function() {
				$sheet.remove();
				$bg.remove();
				callback(label, index);
			});
		if (index === options.destructiveButtonIndex) {
			$button.addClass('destructive');
		}
		if (index === options.cancelButtonIndex) {
			$button.addClass('cancel');
		}
	});
}

function sharePage()
{
}
function overflowMenu()
{
}
