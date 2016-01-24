'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

var config = require('../config.js');
var handleError = require('./handleError');

var uglifyTask = function () {
	return gulp.src('./build/js/index.js')
		.pipe(uglify())
			.on('error', handleError('Sm00th'))
		.pipe(gulp.dest('./build/js/'));
};

gulp.task('uglify', uglifyTask);
module.exports = uglifyTask;