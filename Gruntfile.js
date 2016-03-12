// Generated on 2015-12-14 using
// generator-webapp 1.1.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Configurable paths
    var config = {
        squelettes: 'squelettes'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['<%= config.squelettes %>/styles/**/*.{scss,sass}'],
                tasks: ['sass', 'postcss', 'cssmin']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.squelettes %>/css/*.{css,css.map}'
                    ]
                }]
            },
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                sourceMap: true,
                sourceMapEmbed: true,
                sourceMapContents: true,
                includePaths: ['.']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.squelettes %>/styles',
                    src: ['*.{scss,sass}'],
                    dest: '<%= config.squelettes %>/css',
                    ext: '.css'
                }]
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    // Add vendor prefixed styles
                    require('autoprefixer')({
                        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
                    })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.squelettes %>/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= config.squelettes %>/css/'
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= config.squelettes %>/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= config.squelettes %>/css/',
                    ext: '.min.css'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        wiredep: {
            html: {
                src: ['<%= config.squelettes %>/{header,footer}.html'],
                exclude: ['bootstrap.js'],
                ignorePath: /^(\.\.\/)*\.\./
            },
            sass: {
                src: ['<%= config.squelettes %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: /^(\.\.\/)+/
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'wiredep',
        'sass',
        'postcss',
        'cssmin'
    ]);
};
