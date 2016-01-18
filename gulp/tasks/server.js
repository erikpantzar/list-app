'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


var config = require('../config');

var browserSyncTask = function() {
	browserSync({
		server: {
		  baseDir: config.app.build
		}
	});

	gulp.watch(config.style.src+'/*.scss', ['sass']);
	gulp.watch(config.app.src+'/**.html', ['htmlmin']);
	gulp.watch(config.script.src+'/**/**.js', ['browserify']);
	gulp.watch([config.app.src+'/*.html', config.script.dest+'/*.js']).on('change', browserSync.reload);
};


gulp.task('sass', function () {
    gulp.src(config.style.src+'/**/**.scss')	
        .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }))
        .pipe(sourcemaps.write())
        .pipe(browserSync.stream({match: '**/*.css'}))
        .pipe(gulp.dest(config.style.dest + '/'));
});


gulp.task('server', ['htmlmin', 'jshint', 'browserify','sass','watch'], browserSyncTask);
module.exports = browserSyncTask;