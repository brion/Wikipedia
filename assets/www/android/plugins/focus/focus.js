/**
 * Phonegap focus plugin for Android
 * Brion Vibber 2011
 */

var Focus = function() {
	this.setFocus = function(success, fail) {
		return PhoneGap.exec(success, fail, 'FocusPlugin', 'setFocus', []);
	}
};
			
PhoneGap.addConstructor(function() {
	PhoneGap.addPlugin('Focus', new Focus());
});
