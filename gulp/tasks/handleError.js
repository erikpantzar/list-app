'use strict';



var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');


module.exports = function(task, err) {
	return function(err) {
	    gutil.log(gutil.colors.red(err));
	    notify.onError(task + ' failed, check the logs..')(err);
	};
};