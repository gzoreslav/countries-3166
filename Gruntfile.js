'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', {
                            "presets": ["es2015"]
                        }]
                    ]
                },
                files: {
                    './examples/build.js': ['./examples/examples.js']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("example", ["browserify"]);
};