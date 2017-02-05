/*
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
 
gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("solution.css"))
    .pipe(gulp.dest(''));
});
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('solution', function() {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss("solution.css"))
        .pipe(gulp.dest(''))
});

//Watch task

gulp.task('default',function() {
    gulp.watch('sass/*.scss',['solution']);
});
