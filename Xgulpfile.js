// gulpfile.js
// Heavily inspired by Mike Valstar's solution:
//   http://mikevalstar.com/post/fast-gulp-browserify-babelify-watchify-react-build/
"use strict";

const babelify   = require('babelify'),
      browserify = require('browserify'),
      buffer     = require('vinyl-buffer'),
      gulp       = require('gulp'),
      gutil      = require('gulp-util'),
      livereload = require('gulp-livereload'),
      merge      = require('merge'),
      notifier   = require('stream-notifier'),
      rename     = require('gulp-rename'),
      source     = require('vinyl-source-stream'),
      sourceMaps = require('gulp-sourcemaps'),
      watchify   = require('watchify');

var config = {
  js: {
    src: './main.js',       // Entry point
    outputDir: './build/',  // Directory to save bundle to
    mapDir: './maps/',      // Subdirectory to save maps to
    outputFile: 'bundle.js' // Name to use for bundle
  },
};

// This method makes it easy to use common bundling options in different tasks
function bundle (bundler) {
  bundler
    .bundle() // Start bundle
    .pipe(source(config.js.src)) // Entry point
    .pipe(buffer())  // Convert to gulp pipeline
    .pipe(rename(config.js.outputFile)) // Rename output from 'main.js'to 'bundle.js'
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .pipe(sourceMaps.write(config.js.mapDir))    // Save source maps to their own directory
    .pipe(gulp.dest(config.js.outputDir))        // Save 'bundle' to build/
    .pipe(livereload()); // Reload browser if relevant
}

gulp.task('bundle', function () {
  var bundler = browserify(config.js.src)
    .transform(babelify, { presets : [ 'es2015' ] });
  bundle(bundler);
})

/* ************************ */
const sourceFile = 'main.js',
      destFolder = './docs',
      destFile = 'main.js';


/* browserify */
gulp.task('browserify', function() {

  var bundler = browserify({
    entries: sourceFile,
    cache: {}, packageCache: {}, fullPaths: true, debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .on('error', function () {})
      .pipe(source(destFile))
      .pipe(gulp.dest(destFolder));
  };

  bundler = watchify(bundler);
  bundler.on('update', bundle);

  return bundle();
});