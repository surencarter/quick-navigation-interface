// todo rename to app.js when break apart concat and uglify tasks

( function( $ ) {
	'use strict';

	var app = window.IntentDrivenInterface = {
		/**
		 * Initialization that runs as soon as this file has loaded
		 */
		start : function() {
			this.options       = idiOptions;
			this.mainContainer = $( '#idi-container' );
			this.searchField   = $( '#idi-search' );
			idiOptions         = null;

			// todo change from this.options to app.options ?
			// todo can move try/catch to bootstrap?

			try {
				$( window ).keyup( app.toggleInterface );
				app.mainContainer.click( app.toggleInterface );
				app.searchField.keyup( app.showRelevantLinks );
				// todo maybe make this a controller that calls toggleinteface, showrelevantlinks, etc. better than having two listeners for same event?
			} catch ( exception ) {
				app.log( exception );
			}
		},

		/**
		 * Reveal the interface when the user presses the shortcut
		 *
		 * @todo move to relevant view
		 *
		 * @param {object} event
		 */
		toggleInterface : function( event ) {
			if ( 'keyup' === event.type ) {
				if ( event.key === app.options.shortcuts.open ) {
					app.mainContainer.addClass( 'idi-active' );
					app.searchField.focus();
				} else if ( event.key === app.options.shortcuts.close ) {
					app.mainContainer.removeClass( 'idi-active' );
				}
			} else if ( 'click' === event.type ) {
				if ( 'notification-dialog-background' === event.target.className || 'media-modal-icon' === event.target.className ) {
					app.mainContainer.removeClass( 'idi-active' );
				}
			}
		},

		/**
		 * Show relevant links based on the user's query
		 *
		 * @todo move to relevant view
		 */
		showRelevantLinks : function() {
			$( '#idi-instructions' ).addClass( 'idi-active' );
			$( '#idi-menu' ).addClass( 'idi-active' );
		},

		/**
		 * Log a message to the console
		 *
		 * @param {*} error
		 */
		log : function( error ) {
			if ( ! window.console ) {
				return;
			}

			if ( 'string' === typeof error ) {
				console.log( 'Intent-Driven Interface: ' + error );
			} else {
				console.log( 'Intent-Driven Interface: ', error );
			}
		}
	};
} )( jQuery );