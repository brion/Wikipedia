/**
 * Configuration file for webfonts
 * First font is the default font for the language
 */

( function ( $, mw ) {
	"use strict";

	var config = {
		fonts: {
			"Lohit Assamese": {
				woff: "Beng/Lohit-Assamese.woff",
				version: "2.5.1"
			},

			"Lohit Nepali": {
				woff: "Deva/Lohit-Nepali.woff",
				version: "2.5.1.1"
			},

			AbyssinicaSIL: {
				woff: "Ethi/AbyssinicaSIL-R.woff",
				version: "1.2"
			},

			"Lohit Gujarati": {
				woff: "Gujr/Lohit-Gujarati.woff",
				version: "2.5.1"
			},

			KhmerOS: {
				woff: "Khmr/KhmerOS.woff",
				version: "1.10"
			},

			KhmerOSbattambang: {
				woff: "Khmr/KhmerOSbattambang.woff",
				version: "1.10"
			},

			"Lohit Kannada": {
				woff: "Knda/Lohit-Kannada.woff",
				version: "2.5.1"
			},

			Meera: {
				woff: "Mlym/Meera.woff",
				version: "5.0.1"
			},

			"Lohit Oriya": {
				woff: "Orya/Lohit-Oriya.woff",
				version: "2.5.1"
			},

			Pagul: {
				woff: "Saur/Pagul.woff",
				version: "1.0"
			},

			"Lohit Tamil": {
				woff: "Taml/Lohit-Tamil.woff",
				version: "2.5.1"
			},

			"Lohit Tamil Classical": {
				woff: "Taml/Lohit-Tamil-Classical.woff",
				version: "2.5.1.1"
			},

			Thendral: {
				woff: "Taml/ThendralUni.woff",
				version: "1.0"
			},

			Thenee: {
				woff: "Taml/TheneeUni.woff",
				version: "1.0"
			},

			"Lohit Telugu": {
				woff: "Telu/Lohit-Telugu.woff",
				version: "2.5.1"
			},

			"Lohit Punjabi": {
				woff: "Guru/Lohit-Punjabi.woff",
				version: "2.5.1"
			},

			"Siyam Rupali": {
				woff: "Beng/SiyamRupali.woff",
				version: "1.070"
			},
			"Jomolhari": {
				woff: "Tibt/Jomolhari.woff",
				version: "0.003"
			},
			"Saweri": {
				woff: "Bugi/saweri.woff",
				version: "2"
			},
			"Akkadian": {
				woff: "Xsux/Akkadian.woff",
				version: "2.56"
			},
			"TharLon": {
				woff: "Mymr/TharLon.woff",
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
			hbo: [ "Taamey Frank CLM" ],
			km:  [ "KhmerOSbattambang" ],
			kn:  [ "Lohit Kannada" ],
			mak: [ "Saweri" ],
			ml:  [ "Meera" ],
			mr:  [ "Lohit Marathi" ],
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

	$.extend( mw.webfonts.config, config );

} )( jQuery, mediaWiki );
