'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// @TODO: csslint, autoprefixer
// var csslint = require('gulp-csslint');
// var prefix = require('gulp-autoprefixer');

var handleError = require('./handleError');
var config = require('../config');

var sassTask = function() {
	gulp.src(config.style.src+'/**/**.scss')
        .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }).on('error', handleError('sass')))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.style.dest + '/'));
};

gulp.task('sass', sassTask);
module.exports = sassTask;