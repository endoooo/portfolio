const gulp = require('gulp');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

// PostCSS plugins imports
const atImport = require('postcss-import');
const customProperties = require('postcss-custom-properties');
const calc = require('postcss-calc');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// paths

const basePath = 'src';
const distPath = 'dist';

const htmlSrcPath = `${basePath}/*.html`;
const cssSrcPath = `${basePath}/styles/**/*.css`;
const cssEntryFile = `${basePath}/styles/styles.css`;
const jsSrcPath = `${basePath}/scripts/**/*.js`;
const assetsSrcPath = `${basePath}/assets/**`;

// copy HTML files to dist

gulp.task('html', function() {
  gulp.src(htmlSrcPath, { base: basePath })
    .pipe(gulp.dest(distPath));
});

// create styles.css

gulp.task('css', function() {
  const plugins = [
    atImport(),
    customProperties(),
    calc(),
    autoprefixer(),
    cssnano()
  ];

  return gulp.src(cssEntryFile, { base: basePath + '/styles' })
    .pipe(postcss(plugins))
    .pipe(gulp.dest(distPath))
    .pipe(browserSync.stream());
});

// compile js

gulp.task('js', function() {
  gulp.src(jsSrcPath, { base: basePath })
    .pipe(babel())
    .pipe(gulp.dest(distPath));
});

// assets

gulp.task('assets', function() {
  gulp.src(assetsSrcPath, { base: basePath + '/assets' })
    .pipe(gulp.dest(distPath));
});

// static Server + watching css/html files

gulp.task('serve', ['html', 'assets', 'css', 'js'], function() {
  browserSync.init({
    server: 'dist'
  });

  gulp.watch(htmlSrcPath, ['html']).on('change', browserSync.reload);
  gulp.watch(assetsSrcPath, ['assets']).on('change', browserSync.reload);
  gulp.watch(cssSrcPath, ['css']);
  gulp.watch(jsSrcPath, ['js']);
});

gulp.task('build', ['html', 'assets', 'css', 'js']);

gulp.task('default', ['serve']);
