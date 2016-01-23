'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');

var cleanTask = function () {
	gulp.src(config.app.build, { read:false})
	    .pipe(clean());
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;