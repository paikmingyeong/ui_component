/**
 * Created by Administrator on 2017-07-03.
 */

// 변수 선언 = require('모듈이름');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

// gulp.task( task이름, 함수.익명함수 );

gulp.task('hello1', function () {
  return console.log('HELLO WORLD1!');
});

gulp.task('hello2', function () {
  return console.log('HELLO WORLD2!');
});

gulp.task('hello3', function () {
  return console.log('HELLO WORLD3!');
});


// pipe 함수는 모듈의 기능을 실햏해주는 함수

// 새로 고침
gulp.task('livereload', function(){
  gulp.src(['html/*', 'css/*', 'js/*', '*'])
      .pipe( livereload() );
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('*', ['livereload']);
  gulp.watch('html_src/**', ['include', 'livereload']);
  gulp.watch('css_src/**', ['sass', 'livereload']);
});


// header, footer, 공통영역 분리
gulp.task('include', function(){
  gulp.src("html_src/*.html")
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));
});

// sass 실행
gulp.task('sass', function(){
  return gulp.src('css_src/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css/'));
});





gulp.task('default', ['livereload','include','sass', 'watch']);