/* global module:false */
module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        meta:{
            banner:'/*!\n' +
                ' * obelisk.js <%= pkg.version %>\n' +
                ' * https://github.com/nosir/obelisk.js\n' +
                ' * MIT licensed\n' +
                ' *\n' +
                ' * Copyright (C) 2012 Max Huang https://github.com/nosir/\n' +
                ' */',
            version:'<%= pkg.version %>'
        },

        concat:{
            core:{
                src:[
                    'src/namespace.js',
                    'src/*/**/*.js'
                ],
                dest:'build/obelisk.js'
            }
        },

        uglify:{
            options:{
                banner:'<%= meta.banner %>\n'
            },
            build:{
                src:'<%= concat.core.dest %>',
                dest:'build/obelisk.min.js'
            }
        },

        watch:{
            scripts:{
                files:[
                    'src/**/*.js'
                ],
                tasks:['concat']
            }
        }
    });

    // Dependencies
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task
    grunt.registerTask('default', [ 'concat', 'uglify']);

};
