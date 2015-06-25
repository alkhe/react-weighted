var gulp = require('gulp'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	b = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream');

gulp.task('default', ['watch']);
gulp.task('build', ['npm', 'browser']);

gulp.task('watch', function() {
	gulp.watch('./src/**/*.js', ['npm', 'browser'])
});

gulp.task('npm', function() {
	gulp.src('./src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('.'));
});

gulp.task('browser', ['browser-min', 'browser-dev']);

gulp.task('browser-min', function() {
	b({ entries: './src/index.js' })
		.transform(babelify)
		.bundle()
		.pipe(source('weighted.min.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./lib'));
});

gulp.task('browser-dev', function() {
	b({ entries: './src/index.js' })
		.transform(babelify)
		.bundle()
		.pipe(source('weighted.js'))
		.pipe(gulp.dest('./lib'));
});

gulp.task('test', function() {
	b({ entries: './test/weighted.js' })
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./test'));
});
