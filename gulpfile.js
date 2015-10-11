/**
 * Created by Rahul Devaskar on 11/10/15.
 */
'use strict';
var plug = require('gulp-load-plugins')({lazy: true});
var stylish = require('jshint-stylish');

var gulp = require('gulp'),
  config = require('./gulp.config');

gulp.task('lint', function () {
  return gulp.src(config.allJsFiles)
    .pipe(plug.jshint('./.jshintrc'))
    .pipe(plug.jshint.reporter(stylish))
    .pipe(plug.jshint.reporter('fail'));
});

gulp.task('default', ['lint']);
