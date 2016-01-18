'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

var config = require('../config');

module.exports = function() {
    return gulp.src(config.app.build+'/', {read:false})
        .pipe(clean());
    };