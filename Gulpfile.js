'use strict';

var gulp = require('./gulp')([
    'browserify',
    'jshint',
    'clean',
    'sasslint',
    'sass',
    'server',
    'htmlmin',
    'watch'
]);

gulp.task('default', ['sasslint', 'sass', 'jshint', 'browserify', 'htmlmin', 'watch', 'server']);
gulp.task('scripts', ['jshint', 'browserify']);


