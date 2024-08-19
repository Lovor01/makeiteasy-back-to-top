<?php
/**
 * @package           makeiteasy-back-to-top
 * @author 				 Lovro Hrust <lovro@makeiteasy.hr>
 * @copyright 			 2023 Make IT Easy
 *
 * @wordpress-plugin
 * Plugin Name:       Makeiteasy Back To Top
 * Description:       Back to top block
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           1.2.1
 * Author:            Lovro Hrust
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       makeiteasy-back-to-top
 *
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_makeiteasy_back_to_top_block_init() {
	register_block_type( __DIR__ . '/build' );
	wp_set_script_translations( 'makeiteasy-back-to-top-editor-script', 'makeiteasy-back-to-top' );
}
add_action( 'init', 'create_block_makeiteasy_back_to_top_block_init' );
