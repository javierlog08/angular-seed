define([
  'angular',
  'angular-mocks',
  './version.js',
],function(angular){
  'use strict';

  describe('myApp.version module', function() {
    beforeEach(angular.mock.module('myApp.version'));

    describe('version service', function() {
      it('should return current version', angular.mock.inject(function(version) {
        expect(version).toEqual('0.1');
      }));
    });
  });
});


