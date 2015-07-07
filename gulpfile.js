var gulp = require('gulp'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	b = require('browserify'),
	babelify = require('babelify').configure({ stage: 0 }),
	source = require('vinyl-source-stream'),
	buf = require('vinyl-buffer');

gulp.task('default', ['watch']);
gulp.task('build', ['npm', 'browser']);

gulp.task('watch', function() {
	return gulp.watch(['./src/**/*.js', './test/**/*.js'], ['build', 'test'])
});

gulp.task('npm', function() {
	return gulp.src('./src/**/*.js')
		.pipe(babel({ stage: 0 }))
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
		// For some reason, the build fails when these two lines are not present
		.pipe(buf())
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('test', ['test-interactive', 'test-static']);

gulp.task('test-interactive', ['browser-dev'], function() {
	return b({ entries: './test.js', basedir: './test/interactive' })
		.require('../react.js', { expose: 'react' })
		.require('../../dist/weighted.js', { expose: 'react-weighted' })
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./test/interactive'));
});

gulp.task('test-static', ['browser-dev'], function() {
	return b({ entries: './test.js', basedir: './test/static' })
		.require('../react.js', { expose: 'react' })
		.require('../../dist/weighted.js', { expose: 'react-weighted' })
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./test/static'));
});
