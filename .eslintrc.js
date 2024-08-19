module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended-with-formatting' ],

	plugins: [],
	rules: {
		"curly":["error","multi-or-nest"]
	},
};
