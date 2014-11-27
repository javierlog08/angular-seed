define([
  'angular',        //Need Angular
  'angular-mocks',  //Mocks for test
  'angular-route',  //Controller injected will need this in runtime
  './view2.js',     //Module view used on this test
],function(angular){
  'use strict';

  describe('myApp.view2 module', function() {

    beforeEach(angular.mock.module('myApp.view2'));

    describe('view2 controller', function(){

      it('should ....', angular.mock.inject(function($controller) {
        //spec body
        var view2Ctrl = $controller('View2Ctrl');
        expect(view2Ctrl).toBeDefined();
      }));

    });
  });
});

