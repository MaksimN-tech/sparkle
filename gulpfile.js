const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
});


gulp.task('sourcemaps', function () {
    return gulp.src("./sass/*.+(scss|sass)")
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(sourcemaps.write('./'))
     .pipe(gulp.dest('./css'));
   });


gulp.task('styles', function () {
   return gulp.src("./sass/*.+(scss|sass)") 
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
        .pipe(rename({
                prefix: "",
                suffix: ".min"
              }))
        .pipe(autoprefixer('last 2 versions')) 
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css')) 
        .pipe(browserSync.stream());
});


gulp.task('watch', function() {
    gulp.watch("./sass/*.+(scss|sass)", gulp.parallel("styles","sourcemaps"))
    gulp.watch("*.html").on("change", browserSync.reload);
})

gulp.task('default', gulp.parallel('watch','server', 'styles', 'sourcemaps'));