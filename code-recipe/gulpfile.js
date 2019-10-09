require('es6-promise').polyfill();
const gulp = require('gulp');
const scss = require('gulp-sass');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const onError = function (err) {
    console.log('An error occurred:', gutil.colors.magenta(err.message));
    gutil.beep();
    this.emit('end');
};

gulp.task('pug', function () {
    return gulp.src(['./templates/**/*.pug','!./templates/_extends/**/*.pug','!./templates/_includes/**/*.pug'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./public/'))
});

gulp.task('scss', function () {
    return gulp.src(['./stylesheets/**/*.scss','!./stylesheets/_imports/**/*.scss'])
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/'))
});

gulp.task('js', function () {
    return gulp.src(['./scripts/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('images', function () {
    return gulp.src('./images/src/*')
        .pipe(plumber({errorHandler: onError}))
        .pipe(imagemin({optimizationLevel: 7, progressive: true}))
        .pipe(gulp.dest('./public/img/'));
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './public/',
        },
        files: ['./public/**.html', './public/**.css', './public/**.js'],
    });
    gulp.watch('./templates/**/*.pug', gulp.series(['pug']));
    gulp.watch('./stylesheets/**/*.scss', gulp.series(['scss']));
    gulp.watch('./scripts/*.js', gulp.series(['js']));
    gulp.watch('images/src/*', gulp.series(['images']));
});

gulp.task('default', gulp.series(['pug', 'scss', 'js', 'images', 'watch']));
