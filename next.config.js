const withSass = require('@zeit/next-sass');

/* We need to configure Next.js so that our Sass-Modules are getting
compiled correctly into CSS when we run our app in the browser */

module.exports = withSass({
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[local]___[hash:base64:5]'
	}
});
