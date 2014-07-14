'use strict';

var fs = require('fs');
var path = require('path');
var unwrap = require('./lib/unwrap.js');

var through = require('through2');
var gutil = require('gulp-util');

var PLUGIN_NAME = 'gulp-unwrap';

module.exports = function(opts) {
	var opts = opts || {};

	var base = path.resolve(opts.base || './');
	var globalBase = path.resolve(opts.globalBase || './global_modules');
	var namespace = opts.namespace || 'this';
	var banner = opts.banner || '';

	return through.obj(function(file, encoding, cb){
		if(file.isNull()) {
			this.push(file);
			return cb();
		}

		if(file.isStream()) {
			this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not support'));
			return cb();
		}

		var output = unwrap({
			base: base,
			globalBase: globalBase,
			target: path.basename(file.path),
			name: opts.name,
			namespace: namespace
		});
		if(banner) {
			file.contents = Buffer.concat([
				new Buffer(banner),
				new Buffer(output)
			]);
		} else {
			file.contents = new Buffer(output);
		}

		this.push(file);
		cb();
	});
}