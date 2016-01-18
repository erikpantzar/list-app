'use strict';

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

var config = require('../config');

var minFn = function() {
  return gulp.src(config.app.src+'/**/**.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.app.build+'/'));
};

gulp.task('minify', minFn);
module.exports = minFn;