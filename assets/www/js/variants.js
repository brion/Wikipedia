window.variants = function() {

	// Pulled from MediaWiki's LanguageXX classes.
	var variantMap = {
		'gan': ['gan', 'gan-hans', 'gan-hant'],
		'iu': ['iu', 'ike-cans', 'ike-latn'],
		'kk': ['kk', 'kk-cyrl', 'kk-latn', 'kk-arab', 'kk-kz', 'kk-tr', 'kk-cn'],
		'ku': ['ku', 'ku-arab', 'ku-latn'],
		'shi': ['shi', 'shi-tfng', 'shi-latn'],
		'sr': ['sr', 'sr-ec', 'sr-el'],
		'tg': ['tg', 'tg-latn'],
		'uz': ['uz', 'uz-latn', 'uz-cyrl'],
		'zh': ['zh', 'zh-hans', 'zh-hant', 'zh-cn', 'zh-tw', 'zh-hk', 'zh-mo', 'zh-sg', 'zh-my']
	};

	function hasVariants( lang ) {
		return ( lang in variantMap );
	}
	
	function getVariants( lang ) {
		if ( hasVariants( lang ) ) {
			return variantMap[lang];
		} else {
			return [];
		}
	}

	return {
		hasVariants: hasVariants,
		getVariants: getVariants
	}
}();