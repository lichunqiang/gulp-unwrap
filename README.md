gulp-unwrap
-------------

> [grunt-unwrap](https://github.com/aui/grunt-unwrap)'s gulp version.

## Usage

```
var unwrap = require('gulp-unwrap');

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
```

## More

See [__grunt-unwrap__](https://github.com/aui/grunt-unwrap)

_Issues should be reported on the grunt-unwrap [issue tracker](https://github.com/aui/grunt-unwrap/issues)_