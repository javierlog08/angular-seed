/**
 * Created by Javier on 11/23/2014.
 * angular needs to be present on a page before setting up application module,
 * which is required to exist when defining routes config.
 * We use domReady RequireJS plugin to make sure that DOM is ready when we start the app.
 * Note that before doing so we’re loading the app.js dependency, in there the main application is defined.
 * @reference: http://www.startersquad.com/blog/angularjs-requirejs/
 */
define([
    'require',
    'angular',
    'app',
], function (require, angular) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['myApp']);
    });
});