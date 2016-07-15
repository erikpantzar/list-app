'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

var config = require('../config');
var handleError = require('./handleError');


var browserifyTask = function () {    
    var b = browserify({
    entries: './src/js/index.js',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: []
  });

  return b.bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(ngAnnotate())
        .on('error', handleError('browserify'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.script.dest));
};

gulp.task('browserify', browserifyTask);
module.exports = browserifyTask;