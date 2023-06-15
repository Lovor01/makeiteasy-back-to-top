=== Makeiteasy Back To Top ===
Contributors:      lovor
Tags:              back to top, block, scroll to top, back to top block, scroll up, back top button, scroll top button, easy, button
Tested up to:      6.2.2
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Entirely block based back to top button.

== Description ==

Very customizable and lightweight back to top 🔼 solution.

Fully compatible with [Full Site Editing](https://developer.wordpress.org/block-editor/getting-started/full-site-editing/) themes and with classic themes if block editor is enabled.

#### How this differs from other similar plugins?

This is a block, inside which you can insert any other block. This makes it utmost customizable. By default, a button block with inline image is inserted, but you can remove it and insert any other block you wish or customize default button or insert your own image. As button is a normal WordPress block, you can customize it like you would normally do, pick background color or foreground color from sidebar, choose border radius for edges, or anything else which is customizable in block editor.

== Installation ==

You can install the plugin in usual way, however, the easiest way to get it is in block editor, by entering search phrase 'back to top' or similar while inserting new block with '+' sign in top bar.

"Usual" way:

1. Install the plugin through the WordPress plugins screen directly or upload the plugin files to the `/wp-content/plugins/makeiteasy-back-to-top` directory.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= How customizable is it? =

You can use everything block editor provides.

= Can I insert any custom block or pattern and keep back to top functionality? =

Yes, but you should take care to preserve accessibility. Button is the best element, since button is accessible HTML element and it is clear that it gives some action.

= Can I insert my own block inside  =

Yes, but see above notes.

== Screenshots ==


== Changelog ==

= 1.0.0 =

* Release

== Usage ==

#### General

Plugin provides a block called "Back to top", which serves the commonly known purpose to take user to top of the page. By default, button appears only when user scrolls some amount down.

#### Block themes

The best way to use plugin is using [full site editing theme](https://fullsiteediting.com/). There you can add it to footer (alternatively to header) and block will be displayed on each page with this footer. If you add it to page, it will be displayed for this page only.

#### Classic themes

As mentioned above, adding this block to page will show it only on this page. To show it on many/all pages, you have to add it to footer (or header). You can do so by creating block on one of the pages and copy its code (copy option from block menu). Then, add `do_blocks($content);` line in your footer (header) php template, where you replace $content with copied block content. Content must be between single quotes, as it is string, according to rules of PHP.

#### Features (block editor sidebar)

- In the block sidebar, it is possible to choose if the block will appear both on desktop and mobile variant of page and breakpoint between the two.
- Choose page scroll mode when clicked on button: smoothly or instantly.
- Opacity of the block.
- Duration of slow appearance ("fade in").
- Position of the block from bottom right corner of the browser window, in css unit by choice.