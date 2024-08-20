=== MakeITeasy Back To Top ===
Contributors:      lovor
Donate link:       https://buymeacoffee.com/lovro
Tags:              back to top, scroll to top, back to top button, scroll to top button, back to top block
Requires at least: 6.5
Tested up to:      6.6
Stable tag:        1.2.1
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Block based back to top. Lightweight, no dependencies, customizable and with some advanced options.
Based on best block development practices.

== Description ==

Very customizable and lightweight back to top 🔝 solution.

Fully compatible with [Full Site Editing](https://developer.wordpress.org/block-editor/getting-started/full-site-editing/) themes and with classic themes if block editor is enabled.

#### How this differs from other similar plugins?

This is a block, inside which you can insert any other block. This makes it utmost customizable. By default, a button block with inline image is inserted, but you can remove it and insert any other block you wish or customize default button or insert your own image. As button is a normal WordPress block, you can customize it like you would normally do, pick background color or foreground color from sidebar, choose border radius for edges, or anything else which is customizable in block editor.

#### Features (block editor sidebar)

- In the block sidebar, it is possible to choose if the block will appear both on desktop and mobile variant of page and breakpoint between the two.
- Choose page scroll mode when clicked on button: smooth or instant.
- Opacity of the block.
- Duration of slow appearance ("fade in").
- Position of the block from bottom right corner of the browser window, in css unit by choice.
- Go to bottom functionality.

== DEMO ==

#### Test in wordpress playground

Choose "Live preview" button in top left area of screen.

To get this working, a little effort is needed. These are the steps:

- Enter the admin area
- Open site editor (Edit site in admin toolbar)
- On the left sidebar, in AREAS, find Footer
- Insert "Back to top" block in the footer group block (outer group block, as there are two), as the last element of group. If you insert it outside, it may appear very wide. If you inserted it in the wrong place, correct it by moving the block to position.
- Set block alignment to right if you want it at the right side. Be carefull to set "Back to top"'s block alignment, not alignment of the inner button.
- You can also activate "go to bottom" functionality in the block settings sidebar to try this.
- Save and navigate to front page. It should work.

Or, alternatively, try demo of my popup block, where everything is already set up and also back to top button is showcased: [MakeITeasy popup](https://wordpress.org/plugins/makeiteasy-popup/?preview=1)

#### Go to bottom

Introduced go to bottom functionality - can be turned on in block sidebar (off by default). When user scrolls down button flips down ⬇ and leads to bottom of page, when scrolled up it flips up ⬆ and leads to top of page.

== Installation ==

You can install the plugin in usual way, however, the easiest way to get it is in block editor, by entering search phrase 'back to top' or similar while inserting new block with '+' sign in top bar.

"Usual" way:

1. Install the plugin through the WordPress plugins screen directly or upload the plugin files to the `/wp-content/plugins/makeiteasy-back-to-top` directory.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= How customizable is it? =

You can use everything block editor provides.

= Can I insert my own icon inside the button? =

Yes, one way to do it is to use "Inline image" feature of the button block. If you want to put SVG image, you should one of plugins for SVG sanitization,
as SVG's are not by default allowed in WordPress because of security issues (JavaScript code may be embedded in SVG).

= Can I insert any custom block or pattern and keep back to top functionality? =

Yes, but you should take care to preserve accessibility. Button is the best element, since button is accessible HTML element and it is clear that it gives some action.

= Can I insert my own block inside  =

Yes, but see above notes.

== Screenshots ==

1. Desktop post
2. Mobile post
3. Full site editing - footer

== Changelog ==

= 1.2.1 =

Added automatic change to "go to top" (flip of the block) from "go to bottom" mode if bottom of page is reached.

= 1.2.0 =

Block updated to v3 API

= 1.1.1 =

Update incorrect description how to insert block in footer in classic theme. Added example for GeneratePress theme.
Fixed block to appear on right side in editor while classic theme is active.
Fixed Go to bottom function not working in some instances.

= 1.1.0 =

Introduced option "Go to bottom"

= 1.0.1 =

* Fix for incorrect alt attribute on inline image inside button on default template - thanks @thisbit (Elvis Krstulović) for testing and spotting.

= 1.0.0 =

* Initial release

== Upgrade Notice ==

= 1.2.1 =

Feature added

== Usage ==

#### General

Plugin provides a block called "Back to top", which serves the commonly known purpose to take user to top of the page. By default, button appears only when user scrolls some amount down.

#### Block themes

The best way to use plugin is using [full site editing theme](https://fullsiteediting.com/). There you can add it to footer (alternatively to header) and block will be displayed on each page with this footer. If you add it to page, it will be displayed for this page only.

#### Classic themes

As mentioned above, adding this block to page will show it only on this page. To show it on many/all pages, you have to add it to footer (or header). You can do so by creating block on one of the pages and copy its code (copy option from block menu). Then, add `echo do_blocks($content);` line in your footer (header) php template, where you replace $content with copied block content string. Content must be between single quotes, as it is string, according to rules of PHP. Or even better, use [nowdoc](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc) syntax.
Example for theme [GeneratePress](https://wordpress.org/themes/generatepress/):

First create child theme, so your code is not overwritten by theme updates. Then in footer.php, after line 13 of original footer.php of theme insert following code:

`
echo do_blocks(
	<<<'block'
	<!-- wp:makeiteasy/back-to-top -->
		<div id="makeiteasy-back-to-top" data-smooth-scroll="false" data-enable-on-desktop="true" data-break-point-mobile-desktop="768" data-go-to-bottom="true" style="--makeiteasy-back-to-top-opacity:0.7;--makeiteasy-back-to-top-visibility-transition-duration:0.3s;--makeiteasy-back-to-top-right:30px;--makeiteasy-back-to-top-bottom:30px" class="wp-block-makeiteasy-back-to-top"><!-- wp:button {"style":{"spacing":{"padding":{"top":"12px","right":"12px","bottom":"12px","left":"12px"}},"border":{"radius":"9px"}}} -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" style="border-radius:9px;padding-top:12px;padding-right:12px;padding-bottom:12px;padding-left:12px"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCA5NiA0ODAgMjgzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00MyAzNzktNDMtNDMgMjQwLTI0MCAyNDAgMjQwLTQzIDQzLTE5Ny0xOTd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg==" alt="Back to top arrow" width="24" height="24"></a></div>
		<!-- /wp:button --></div>
	<!-- /wp:makeiteasy/back-to-top -->
	block
);
`

*Important note:*

If you install block through block editor, and after creating block, you copy block code to footer and delete original block in page, plugin will be automatically uninstalled. This is handled by WordPress.
Therefore, if you are using classic theme and you will use block code only in PHP, either install plugin in a classic way through plugins page or keep one copy of block active somewhere (e.g dummy draft page), to prevent automatic uninstall.

== Developers ==

= Github repository =

[https://github.com/Lovor01/makeiteasy-back-to-top](https://github.com/Lovor01/makeiteasy-back-to-top)
