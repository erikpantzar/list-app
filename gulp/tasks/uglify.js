'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify'),
ngAnnotate = require('gulp-ng-annotate');

var config = require('../config.js'), 
handleError = require('./handleError');


var uglifyTask = function () {
	gulp.src(config.build+'/js/index.js')
		.pipe(ngAnnotate())
		.pipe(uglify())
		//.pipe(uglify())
			.on('error', handleError('Sm00th'))
		.pipe(gulp.dest('dist'));
};

gulp.task('uglify', uglifyTask);
module.exports = uglifyTask;