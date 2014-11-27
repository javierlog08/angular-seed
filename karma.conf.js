module.exports = function(config){
  config.set({

    basePath : './',

    frameworks: ['jasmine','requirejs'],

    files: [
      {pattern: 'app/bower_components/angular/angular.js', included: false},
      {pattern: 'app/bower_components/angular-route/angular-route.js', included: false},
      {pattern: 'app/bower_components/angular-mocks/angular-mocks.js', included: false},
      {pattern: 'app/components/**/*.js', included: false},
      {pattern: 'app/view*/**/*.js', included: false},

      'app/require.test.conf.js'
    ],

    autoWatch : true,

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-requirejs'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
