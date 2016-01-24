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
                    './examples/dist/index.js': ['./examples/src/examples.js']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("example", ["browserify"]);
};