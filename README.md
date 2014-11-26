gulp-unwrap
-------------

[![Version][version]](https://npmjs.org/package/gulp-unwrap)
[![Dependency Status][deps]](https://david-dm.org/lichunqiang/gulp-unwrap)
[![Downloads][downloads]](https://npmjs.org/package/gulp-unwrap)

> [grunt-unwrap](https://github.com/aui/grunt-unwrap)'s gulp version.

## Install

```sh
$ npm install gulp-unwrap --save-dev
```

## Usage

```javascript
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

[version]: http://img.shields.io/npm/v/gulp-unwrap.svg?style=flat
[deps]: http://img.shields.io/david/lichunqiang/gulp-unwrap.svg?style=flat
[downloads]: http://img.shields.io/npm/dm/gulp-unwrap.svg?style=flat
