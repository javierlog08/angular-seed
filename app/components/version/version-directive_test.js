define([
  'angular',
  'angular-mocks',
  './version-directive.js'
],function(angular){

  'use strict';

  describe('myApp.version module', function() {
    beforeEach(angular.mock.module('myApp.version'));

    describe('app-version directive', function() {
      it('should print current version', function() {
        angular.mock.module(function($provide) {
          $provide.value('version', 'TEST_VER');
        });
        angular.mock.inject(function($compile, $rootScope) {
          var element = $compile('<span app-version></span>')($rootScope);
          expect(element.text()).toEqual('TEST_VER');
        });
      });
    });
  });
});


