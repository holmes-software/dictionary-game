module.exports = {
	globDirectory: './src/',
	globPatterns: [
		'**/*.{css,html,js}'
	],
	swDest: './src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};