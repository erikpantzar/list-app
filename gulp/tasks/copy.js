'use strict';


var gulp = require('gulp');
var copy = require('gulp-copy');

var config = require('../config');
//var handleError = require('./handleError');

var copyTask = function() {
	gulp.src(config.app+'/assets/mp3/**')
		.pipe(copy(config.dest+'/assets/'), null);
};

gulp.task('copy', copyTask);
module.exports = copyTask;
