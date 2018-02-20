const gulp              = require('gulp'),
      autoprefixer      = require('gulp-autoprefixer'),
      babel             = require('gulp-babel'),
      browserSync       = require('browser-sync').create(),
      gulpif            = require('gulp-if'),
      sass              = require('gulp-sass'),
      sourcemaps        = require('gulp-sourcemaps'),
      uglify            = require('gulp-uglify'),
      useref            = require('gulp-useref'), // concatenates files
      watch             = require('gulp-watch'),
      reload            = browserSync.reload;

gulp.task('css',() => (
  gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('docs/css'))
    .pipe(browserSync.stream())
  )
);

gulp.task('copy', () => (
  gulp.src('src/**/*.+(html|js)')
    .pipe(useref())
    .pipe(gulpif('*.js', sourcemaps.init()))
    .pipe(gulpif('*.js', babel({presets: ["env"]})))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.js', sourcemaps.write('.')))
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.stream())
))

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task('default', () => {

  browserSync.init({
      server: "docs"
  });

  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/**/*.+(html|js)', ['copy']);
})
