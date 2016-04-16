/*jslint node: true, nomen: true*/
'use strict';

var watchify = require('watchify');
var errorify = require('errorify');
var browserify = require('browserify');
var gulp = require('gulp');
var path = require("path");
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');

var paths = {
    build: './build/',
    js:    './src/'
};

var options = {
    cache:        {},
    packageCache: {},
    entries:      path.join(paths.js, 'obelisk.js'),
    debug:        true
};

function bundle(w) {
    w.bundle()
        .pipe(source('obelisk.js'))
        .pipe(gulp.dest(paths.build));
}

// private task
gulp.task('_browserify', function () {
    options.plugin = [watchify, errorify];

    var w = browserify(options);

    w.on('update', function () {
        bundle(w);
    });

    w.on('log', function (msg) {
        console.log(msg);
    });

    bundle(w);

    return w;
});


// register watch task
gulp.task('browserify:watch', function (callback) {
    runSequence('_browserify', callback);
});

// register build task
gulp.task('browserify:build', function () {
    options.plugin = [errorify];

    bundle(browserify(options));
});
