/**
 * Parent block for cover-hover blocks
 */

import './editor.scss';

// Components
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import sidebar from './block-sidebar.jsx';
import { __ } from '@wordpress/i18n';

import initialImage from './block-assets/keyboard_arrow_up.svg';

// @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/panel#panelbody

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export const Edit = ( {
	attributes: {
		smoothScroll,
		opacity,
		position,
		transitionDuration,
		enableOnDesktop,
		breakPointMobileDesktop,
		goToBottom
	},
	setAttributes,
} ) => (
	<>
		{ sidebar( {
			setAttributes,
			smoothScroll,
			enableOnDesktop,
			breakPointMobileDesktop,
			transitionDuration,
			opacity,
			position,
			goToBottom
		} ) }
		<div
			{ ...useInnerBlocksProps(
				useBlockProps( {
					id: 'makeiteasy-back-to-top',
					style: {
						'--makeiteasy-back-to-top-opacity': opacity,
						'--makeiteasy-back-to-top-visibility-transition-duration':
							transitionDuration,
						'--makeiteasy-back-to-top-right': position.x,
						'--makeiteasy-back-to-top-bottom': position.y,
					},
				} ),
				{
					template: [
						[
							'core/button',
							{
								text: `<img src="${ initialImage }" alt="${ __(
									'Back to top arrow',
									'makeiteasy-back-to-top'
								) }" width="24" height="24">`,
								ariaLabel: __(
									'Back to top',
									'makeiteasy-back-to-top'
								),
								style: {
									spacing: {
										padding: {
											top: '12px',
											right: '12px',
											bottom: '12px',
											left: '12px',
										},
									},
									border: { radius: '9px' },
								},
							},
						],
					],
				}
			) }
		/>
	</>
);

export const Save = ( {
	attributes: {
		smoothScroll,
		opacity,
		position,
		transitionDuration,
		enableOnDesktop,
		breakPointMobileDesktop,
		goToBottom
	},
} ) => (
	<div
		{ ...useInnerBlocksProps.save(
			useBlockProps.save( {
				id: 'makeiteasy-back-to-top',
				'data-smooth-scroll': smoothScroll,
				'data-enable-on-desktop': enableOnDesktop,
				'data-break-point-mobile-desktop': breakPointMobileDesktop,
				'data-go-to-bottom': goToBottom,
				style: {
					'--makeiteasy-back-to-top-opacity': opacity.toString(),
					'--makeiteasy-back-to-top-visibility-transition-duration':
						transitionDuration,
					'--makeiteasy-back-to-top-right': position.x,
					'--makeiteasy-back-to-top-bottom': position.y,
				},
			} )
		) }
	/>
);
