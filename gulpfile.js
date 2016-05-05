var gulp       = require('gulp');  
var less       = require('gulp-less');  
var watch      = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var concat = require ('gulp-concat')

/* Task to compile less */
gulp.task('compile-less', function() {  
  	gulp.src('./less/*.less')
    	.pipe(less({compress: true}))
    	.pipe(autoprefixer('last 10 versions', 'ie 9'))
    	.pipe(concat('main.css'))
    	.pipe(gulp.dest('./assets/dist/'))
});

/* Task to watch less changes */
gulp.task('watch-less', function() {  
  	gulp.watch('./less/*.less' , ['compile-less']);
});

/* Task when running `gulp` from terminal */
gulp.task('default', ['compile-less', 'watch-less']);  