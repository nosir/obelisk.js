/**
 * Dependencies
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
    runSequence('browserify:build', 'min', callback);
});
