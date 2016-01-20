'use strict';

var gulp = require('./gulp')([
    'browserify',
    'jshint',
    'clean',
    'sass',
    'server',
    'copy',
    'htmlmin',
    'watch'
]);

gulp.task('default', ['sass', 'jshint', 'browserify', 'htmlmin', 'watch', 'server']);
gulp.task('scripts', ['jshint', 'browserify']);


