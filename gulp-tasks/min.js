var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var runSequence = require('run-sequence');
var path = require('path');
var fs = require('fs');

var paths = {
    build: './build/'
};

var getLicense = function () {
    return '' + fs.readFileSync('./LICENSE');
};

var packageInfo = JSON.parse(fs.readFileSync('package.json', 'utf8'));

gulp.task('_min-clean', function () {
    return gulp.src(path.join(paths.build, '*.min.*'))
        .pipe(rimraf());
});

gulp.task('_min-js', function () {
    return gulp.src([
            path.join(paths.build, 'obelisk.js'), ('!' + paths.build + '*.min.js')
        ])
        .pipe(uglify())
        .pipe(header(getLicense(), {
            version: packageInfo.version,
            build:   (new Date()).toUTCString()
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.join(paths.build)));
});

gulp.task('min', function (callback) {
    runSequence('_min-clean', ['_min-js'], callback);
});
