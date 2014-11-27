define([
  'angular',
  './interpolate-filter.js', // Do we include filter here
  './version-directive.js'   // Do we include directive here
],function(angular){

  'use strict';

  return angular.module('myApp.version', [
    'myApp.version.interpolate-filter',
    'myApp.version.version-directive'
  ])

  .value('version', '0.1');

});


