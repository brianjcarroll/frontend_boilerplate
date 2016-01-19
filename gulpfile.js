// gulp
var gulp = require('gulp');


// plugins
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var merge = require('merge-stream');
var babel = require('gulp-babel');
var watch = require('gulp-watch');

// tasks
gulp.task('sass', function() {

  return gulp.src(['src/styles/normalize.css','src/styles/*.scss'])
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))

});

gulp.task('scripts', function() {

  return gulp.src('src/scripts/*.js')
    .pipe(concat('site.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename('site.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));

});

gulp.task('watch', function() {
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/scripts/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);
