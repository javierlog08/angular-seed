define([
  'angular',        //Need Angular
  'angular-mocks',  //Mocks for test
  'angular-route',  //Controller injected will need this
  './view1.js',     //Module view used on this test
],function(angular) {
  'use strict';

  describe('myApp.view1 module', function() {

    beforeEach(angular.mock.module('myApp.view1'));

    describe('view1 controller', function(){

      it('should ....', angular.mock.inject(function($controller) {
        //spec body
        var $scope = {};
        var view1Ctrl = $controller('View1Ctrl',{$scope:$scope});
        expect(view1Ctrl).toBeDefined();
      }));

    });
  });

});
