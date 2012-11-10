window.languageLinks = function() {
	var langs = [];
	function onLanguageLinkClick() {
		var parent = $(this).parents(".listItemContainer");
		var title = parent.data("title");
		var lang = parent.data("lang");
		chrome.hideContent();
		chrome.showSpinner();
		app.navigateTo(title, lang);
	}

	var initialized = false;

	function showLangLinks(page) {
		chrome.showSpinner();
		var req = page.requestLangLinks().done(function(langLinks) {
			var template = templates.getTemplate("language-links-template");
			app.getWikiMetadata().done(function(wikis) {
				/*
				$.each(langLinks, function(i, link) {
					link.dir = l10n.isLangRTL(link.lang) ? "rtl" : "ltr";
					link.langName = wikis[link.lang].name;
				});
				langLinks.sort(function(l1, l2) {
					return l1.langName.localeCompare(l2.langName);
				});
				$("#langList").html(template.render({langLinks: langLinks}));
				$(".languageLink").click(onLanguageLinkClick);
				chrome.hideOverlays();
				chrome.hideContent();
				chrome.hideSpinner();
				$('#langlinks').localize().show();

				chrome.setupScrolling('#langlinks .scroller');
				*/
				chrome.hideOverlays();
				chrome.hideContent();
				chrome.hideSpinner();

				var langs = {},
					langMap = {};
				$.each(langLinks, function(i, link) {
					langs[link.lang] = link.name;
					langMap[link.lang] = link.title;
				});
				// drop the old ULS so we can reinitialize
				$( '.uls-menu' ).remove();
				$( '#langSelector' ).replaceWith( $( '<div id="langSelector"></div>' ) );

				$( '#langSelector' ).uls( {
					onSelect : function( language ) {
						chrome.showContent();
						chrome.showSpinner();
						app.navigateTo(langMap[language], language);
					},
					onCancel: function() {
						chrome.showContent();
					},
					top: '0px', // can't use 0
					left: '0px',
					languages: langs,
					lazyload: false
				} );
				$( '#langSelector' ).click();
			});
		}).fail(function(err, textStatus) {
			if(textStatus === "abort") {
				// User cancelled action. Do nothing!
				console.log("User cancelled langlinks view");
				return;
			}
			chrome.hideSpinner();
			chrome.popupErrorMessage(xhr);
		});
		chrome.setSpinningReq(req);
	}

	return {
		showLangLinks: showLangLinks
	};
}();
