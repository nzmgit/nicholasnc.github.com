var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var postcss = require('postcss');
var gulpPostcss = require('gulp-postcss');
var pug = require('gulp-pug');
var postcssModules = require('postcss-modules');


// PostCSS Plugins
var processors = [
    postcssModules,
];

gulp.task('css', function() {
    return gulp.src('./src/styles/*.css')
        .pipe(gulpPostcss(processors))
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('pug', ['css'], function() {
    return gulp.src('./src/templates/*.pug')
        .pipe(
            pug({
                pretty: true, // 不要压缩代码
                data: {
                    css: require('./src/styles/testCssModules.css.json') // 将css-modules的变量注入到pug中
                }
            })
        )
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['css', 'pug']);
