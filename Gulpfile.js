'use strict';

var gulp = require('./gulp')([
    'browserify',
    'jshint',
    'clean',
    'sass',
    'server',
    'copy',
    'uglify',
    'htmlmin',
    'watch'
]);

gulp.task('default', ['sass', 'jshint', 'browserify', 'htmlmin', 'watch', 'server']);
gulp.task('dev', ['htmlmin', 'sass', 'jshint', 'browserify', 'watch', 'server']);
gulp.task('scripts', ['jshint', 'browserify', 'uglify']);


