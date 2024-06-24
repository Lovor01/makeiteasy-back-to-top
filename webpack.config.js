/**
 * Build includes assets copying, hence default @wordpress/scripts config is modified
 */
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

// change webpack default config
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

// copy assets to build
defaultConfig.plugins.push(
	new CopyWebpackPlugin( {
		patterns: [
			{
				from: 'block-assets/*',
				context: 'src',
			},
		],
	} )
);

module.exports = defaultConfig;
