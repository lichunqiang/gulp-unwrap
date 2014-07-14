var gulp = require('gulp');
var gutil = require('gulp-util');

var meta = {
	banner: '/*test*/\n'
}

var unwrap = require('./index');

gulp.task('default', function(){

	return gulp.src(['src/dialog.js', 'src/dialog-plus.js'])
			.pipe(unwrap({
				base: './src',
                globalBase: './src/global_modules',
                name: 'dialog',
                namespace: 'window',
                banner: meta.banner		
			}))
			.pipe(gulp.dest('dist'));
});