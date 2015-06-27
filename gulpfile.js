var gulp = require('gulp'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	b = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	buf = require('vinyl-buffer');

gulp.task('default', ['watch']);
gulp.task('build', ['npm', 'browser', 'test']);

gulp.task('watch', function() {
	gulp.watch(['./src/**/*.js', './test/**/*,js'], ['npm', 'browser', 'test'])
});

gulp.task('npm', function() {
	gulp.src('./src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./lib'));
});

gulp.task('browser', ['browser-min', 'browser-dev']);

gulp.task('browser-min', function() {
	b({ entries: './src/index.js', standalone: 'Weighted' })
		.transform(babelify)
		.external('react')
		.bundle()
		.pipe(source('weighted.min.js'))
		.pipe(buf())
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('browser-dev', function() {
	b({ entries: './src/index.js', standalone: 'Weighted' })
		.transform(babelify)
		.external('react')
		.bundle()
		.pipe(source('weighted.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('test', function() {
	b({ entries: './weighted.js', basedir: './test' })
		.require('./react.js', { expose: 'react' })
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./test'));
});
