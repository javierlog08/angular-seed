/**
 * Created by Javier on 1/23/2014.
 */
define([
  'angular',
  'angular-route',
  './view1/view1',
  './view2/view2',
  './components/version/version' //We Only include main "version" component. see version.js
], function (angular) {

  'use strict';

  var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

  return app;

});
