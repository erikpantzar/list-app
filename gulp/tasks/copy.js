'use strict';


var gulp = require('gulp');
var copy = require('gulp-copy');

var config = require('../config');
var handleError = require('./handleError');

var copyTask = function() {
	gulp.src(config.app+'/assets/')
		.pipe(copy())
		.pipe(gulp.dest(config.build));
};


gulp.task('clean', copyTask);
module.exports = copyTask;
