'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('styles/sass/index.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/css'));
});
