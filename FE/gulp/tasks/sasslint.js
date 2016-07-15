'use strict';

var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

var handleError = require('./handleError');
var config = require('../config');

var sassLintTask = function () {
    return gulp.src(config.style.src + '/*.s+(a|c)ss')// takes both .sass and .scss
        .pipe(sassLint())
        .pipe(sassLint.format()) // gets the formating rules
        .pipe(sassLint.failOnError()) // error
            .on('error', handleError('sasslint')); // own error
};


gulp.task('scss-lint', sassLintTask);
module.exports = sassLintTask;