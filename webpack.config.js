/**
 * Build includes assets copying, hence default @wordpress/scripts config is modified
 */
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

// change webpack default config
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

if ( process.env.NODE_ENV !== 'production' ) {
	// provide following info if you are working locally on self signed host
	// defaultConfig.devServer.host='navigation';
	// defaultConfig.devServer.server = {
	// 	type: 'https',
	// 	options: {
	// 		cert: 'C:/Wamp.NET/bin/8-apache_2.4.51_x64/conf/vhosts/navigation.crt',
	// 		key: 'C:/Wamp.NET/bin/8-apache_2.4.51_x64/conf/vhosts/navigation.key'
	// 	}
	// };

	// defaultConfig.devServer.client = {logging: 'verbose'};

	// defaultConfig.devServer.allowedHosts = ['navigation', 'localhost', '127.0.0.1'];
}

// copy assets to build
defaultConfig.plugins.push(new CopyWebpackPlugin( {
	patterns: [
		{
			from: 'block-assets/*',
			context: 'src',
		},
	]
}));

module.exports = defaultConfig;