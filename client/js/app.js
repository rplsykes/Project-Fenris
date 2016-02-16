'use strict';

define(["jquery", "config"], function($, config) {

	var assets = null;

	return {

		setAssets: function(preloadAssets) {
			assets = preloadAssets;
		},

		getAssets: function() {
			return assets;
		},

		getPhrase: function(phrase) {

			var phrase = assets.getResult(config.Language)[phrase];

			if ( phrase == undefined ) {
				return "Error! Invalid Phrase!";
			}
			else return phrase;
		},

		showAlert: function(phrase, showOK, optionalText, callback) {

			var phrase = this.getPhrase(phrase);

			$("#alert-text").html(phrase);

			if ( optionalText != "" ) {
				$("#alert-text").append(optionalText);
			}

			$("#alert").show();

			if ( showOK ) {
				$("#alert-ok").show();
			}

		}
	};
}); 