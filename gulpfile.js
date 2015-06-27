var gulp = require('gulp'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	b = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	buf = require('vinyl-buffer');

gulp.task('default', ['watch']);
gulp.task('build', ['npm', 'browser']);

gulp.task('watch', function() {
	return gulp.watch(['./src/**/*.js', './test/**/*.js'], ['build', 'test'])
});

gulp.task('npm', function() {
	return gulp.src('./src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./lib'));
});

gulp.task('browser', ['browser-min', 'browser-dev']);

gulp.task('browser-min', function() {
	return b({ entries: './src/index.js', standalone: 'Weighted' })
		.transform(babelify)
		.external('react')
		.bundle()
		.pipe(source('weighted.min.js'))
		.pipe(buf())
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('browser-dev', function() {
	return b({ entries: './src/index.js', standalone: 'Weighted' })
		.transform(babelify)
		.external('react')
		.bundle()
		.pipe(source('weighted.js'))
		.pipe(buf())
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('test', ['browser-dev'], function() {
	return b({ entries: './weighted.js', basedir: './test' })
		.require('./react.js', { expose: 'react' })
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./test'));
});
