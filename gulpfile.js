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

// consts

const basePath = 'src';
const distPath = 'dist';

// copy HTML files to dist

gulp.task('html', function() {
  gulp.src('src/*.html', { base: basePath })
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

  gulp.src('src/styles/styles.css', { base: basePath + '/styles' })
    .pipe(postcss(plugins))
    .pipe(gulp.dest(distPath));
});

// compile js

gulp.task('js', function() {
  gulp.src('src/scripts/*.js', { base: basePath })
    .pipe(babel())
    .pipe(gulp.dest(distPath));
});

// static Server + watching css/html files

gulp.task('serve', function() {
  browserSync.init({
    server: 'dist'
  });

  gulp.watch('src/styles/*.css', ['css']);
  gulp.watch('src/scripts/*.js', ['js']);
  gulp.watch('src/*.html', ['html']).on('change', browserSync.reload);
});

gulp.task('build', ['html', 'css', 'js']);

gulp.task('default', ['serve']);
