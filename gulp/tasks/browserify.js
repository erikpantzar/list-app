'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var config = require('../config');
var handleError = require('./handleError');


var browserifyTask = function () {

    // set up the browserify instance on a task basis
    var b = browserify({
        entries: config.script.src,
        debug: true
    });

    return b.bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())
          .on('error', handleError('browserify'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/js'));
};


gulp.task('browsierfy', browserifyTask);
module.exports = browserifyTask;