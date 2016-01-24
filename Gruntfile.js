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
                    './dist/build.js': ['./src/index.js']
                }
            },
            example: {
                options: {
                    transform: [
                        ['babelify', {
                            "presets": ["es2015"]
                        }]
                    ]
                },
                files: {
                    './examples/dist/index.js': ['./examples/src/examples.js']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("build", ["browserify:dist"]);
    grunt.registerTask("example", ["browserify:example"]);
};