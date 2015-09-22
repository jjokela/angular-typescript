// Karma configuration
// Generated on Mon Sep 14 2015 12:44:42 GMT+0200 (W. Europe Daylight Time)

module.exports = function (config) {
    config.set({

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/components/*.html': ['ng-html2js']
        },

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            { pattern: 'Scripts/jquery-2.1.4.js', watch: false },
            { pattern: 'Scripts/angular.js', watch: false },
            { pattern: 'Scripts/angular-mocks.js', watch: false },
            { pattern: 'Scripts/angular-sanitize.js', watch: false },
            { pattern: 'Scripts/angular-animate.js', watch: false },            
            { pattern: 'Scripts/respond.min.js', watch: false },
            { pattern: 'Scripts/select.min.js', watch: false },
            { pattern: 'Scripts/angular-toastr.tpls.js', watch: false },
            'app/app.module.js',
            'app/services/services.module.js',
            'app/components/components.module.js',
            'app/conferences/conferences.module.js',
            'app/services/data.services.js',
            'app/components/conference.directive.js',
            'app/components/conference.directive.html',
            'app/conferences/conferences.controller.js',
            'app/conferences/conference-edit.controller.js',
            'app/conferences/conference-details.controller.js',
            'app/conferences/conference-create.controller.js',
            'test/*.js',

            //include the directory where directive templates are stored.
            'app/components/*.html'
        ],

        // list of files to exclude
        exclude: [
        ],

        ngHtml2JsPreprocessor: {            

        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
}
