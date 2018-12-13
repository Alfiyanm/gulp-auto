var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public/'
    };
    return gulp.src('./application/views/*.php')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./application/views'));
});