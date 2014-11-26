/**
 * Created by Javier on 1/23/2014.
 * Require configuration. This is a good point to include libraries.
 * Please refer to requirejs docs.
 * @refer: http://requirejs.org/docs/api.html#config
 */

require.config({

	// alias libraries paths
	paths: {
		'domReady': 'bower_components/requirejs-domready/domReady',
		'angular': 'bower_components/angular/angular',
		'angular-route': 'bower_components/angular-route/angular-route'
	},

	// angular does not support AMD out of the box, put it in a shim
	/**
	 * for libs that either do not support AMD(scripts that do not already call define().)
	 * out of the box, or require some fine tuning to dependency mgt'
	 */
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular']
		}
	},

	// kick start application
	deps: ['./bootstrap']
});