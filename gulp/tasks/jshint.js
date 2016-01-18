'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

var handleError = require('./handleError');
var config = require('../config');


var jshintTask = function() {
	return gulp.src(
		[config.script.src+'/**/**.js', 
			'./gulpfile.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'))
			.on('error', handleError('jshint'));
};


gulp.task('jshint', jshintTask);
module.exports = jshintTask;