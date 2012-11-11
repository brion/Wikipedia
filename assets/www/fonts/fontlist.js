/**
 * Configuration file for webfonts
 * First font is the default font for the language
 */

( function ( $ ) {
	"use strict";

	var config = {
		fonts: {
			"Lohit Assamese": {
				ttf: "Beng/Lohit-Assamese.ttf",
				version: "2.5.1"
			},

			"Lohit Nepali": {
				ttf: "Deva/Lohit-Nepali.ttf",
				version: "2.5.1.1"
			},

			AbyssinicaSIL: {
				ttf: "Ethi/AbyssinicaSIL-R.ttf",
				version: "1.2"
			},

			"Lohit Gujarati": {
				ttf: "Gujr/Lohit-Gujarati.ttf",
				version: "2.5.1"
			},

			KhmerOS: {
				ttf: "Khmr/KhmerOS.ttf",
				version: "1.10"
			},

			KhmerOSbattambang: {
				ttf: "Khmr/KhmerOSbattambang.ttf",
				version: "1.10"
			},

			"Lohit Kannada": {
				ttf: "Knda/Lohit-Kannada.ttf",
				version: "2.5.1"
			},

			Meera: {
				ttf: "Mlym/Meera.ttf",
				version: "5.0.1"
			},

			"Lohit Oriya": {
				ttf: "Orya/Lohit-Oriya.ttf",
				version: "2.5.1"
			},

			Pagul: {
				ttf: "Saur/Pagul.ttf",
				version: "1.0"
			},

			"Lohit Tamil": {
				ttf: "Taml/Lohit-Tamil.ttf",
				version: "2.5.1"
			},

			"Lohit Tamil Classical": {
				ttf: "Taml/Lohit-Tamil-Classical.ttf",
				version: "2.5.1.1"
			},

			Thendral: {
				ttf: "Taml/ThendralUni.ttf",
				version: "1.0"
			},

			Thenee: {
				ttf: "Taml/TheneeUni.ttf",
				version: "1.0"
			},

			"Lohit Telugu": {
				ttf: "Telu/Lohit-Telugu.ttf",
				version: "2.5.1"
			},

			"Lohit Punjabi": {
				ttf: "Guru/Lohit-Punjabi.ttf",
				version: "2.5.1"
			},

			"Siyam Rupali": {
				ttf: "Beng/SiyamRupali.ttf",
				version: "1.070"
			},
			"Jomolhari": {
				ttf: "Tibt/Jomolhari.ttf",
				version: "0.003"
			},
			"Saweri": {
				ttf: "Bugi/saweri.ttf",
				version: "2"
			},
			"Akkadian": {
				ttf: "Xsux/Akkadian.ttf",
				version: "2.56"
			},
			"TharLon": {
				ttf: "Mymr/TharLon.ttf",
				version: "1.0"
			}
		},

		languages: {
			// en:  [ "Libertine", "RufScript", "Ubuntu"],
			akk: [ "Akkadian" ],
			am:  [ "AbyssinicaSIL" ],
			as:  [ "Lohit Assamese" ],
			bn:  [ "Siyam Rupali" ],
			bo:  [ "Jomolhari" ],
			bpy: [ "Siyam Rupali" ],
			bug: [ "Saweri" ],
			dz:  [ "Jomolhari" ],
			gu:  [ "Lohit Gujarati" ],
			km:  [ "KhmerOSbattambang" ],
			kn:  [ "Lohit Kannada" ],
			mak: [ "Saweri" ],
			ml:  [ "Meera" ],
			my:  [ "TharLon" ],
			ne:  [ "Lohit Nepali" ],
			or:  [ "Lohit Oriya" ],
			pa:  [ "Lohit Punjabi" ],
			saz: [ "Pagul" ],
			sux: [ "Akkadian" ],
			ta:  [ "Lohit Tamil" ],
			tcy: [ "Lohit Kannada" ],
			te:  [ "Lohit Telugu" ],
			ti:  [ "AbyssinicaSIL" ]
		}
	};

	function makeStyle(language) {
		console.log('language: ' + language);
		var font = config.languages[language][0];
		console.log('font: ' + font);
		var path = 'fonts/' + config.fonts[font].ttf;
		var style =
			"@font-face {" +
				"font-family: \"" + font + "\";" +
				"src: url(" + path + ") format(truetype);" +
			"}\n" +
			"#main[lang=" + language + "] {" +
				"font-family: \"" + font + "\";" +
				"color: red;" +
			"}\n";
		return style;
	}

	function initStyles() {
		var styles = '';
		$.each( config.languages, function( lang, fonts ) {
			styles += makeStyle( lang );
		});
		$('<style>').attr('type', 'text/css').text(styles).appendTo('head');
	}
	
	$(initStyles);
} )( jQuery );
