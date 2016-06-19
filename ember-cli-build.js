/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
	compileLess = require('broccoli-less-single'),
	mergeTrees = require('broccoli-merge-trees');

module.exports = function (defaults) {
	var app = new EmberApp(defaults, {
			// Add options here
		}),
		nodes = [],
		appStyles = app.options.trees.styles;

	nodes.push(compileLess(
		appStyles,
		'app.less',
		'assets/borg.css',
		{
			paths: [
				'node_modules/tachyons/css',
				'node_modules/colors.css/css',
				'node_modules/btns/css'
			]
		}
	));

	nodes.push(app.toTree());

	return mergeTrees(nodes);
};
