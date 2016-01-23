'use strict';


//var gutil = require('gulp-util');
var notify = require('gulp-notify');


module.exports = function(task) {
	return function(err) {
	    //gutil.log(gutil.colors.red(err));
	    notify.onError(task, 'failed. ', err)(err);
	};
};