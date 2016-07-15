'use strict';

var gulp = require('gulp');
var config = require('../config');

var watchTask = function() {
	gulp.watch(config.app.src + '/**/**.html', ['htmlmin']);
	gulp.watch(config.script.src + '/**/**.js', ['jshint', 'browserify']);
	gulp.watch(config.style.src + '/**/**.scss', ['sass']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;