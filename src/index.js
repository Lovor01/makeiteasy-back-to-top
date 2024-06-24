/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import { Edit, Save } from './edit_save.jsx';
import { ReactComponent as BlockIcon } from './up-arrow.svg';
import {
	attributes_v1_0_1,
	Save_v1_0_1,
	supports_v1_0_1,
} from './deprecated/v1_0_1/deprecated.js';
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'makeiteasy/back-to-top', {
	icon: BlockIcon,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,

	deprecated: [
		{
			attributes: attributes_v1_0_1,
			supports: supports_v1_0_1,
			save: Save_v1_0_1,
		},
	],
} );
