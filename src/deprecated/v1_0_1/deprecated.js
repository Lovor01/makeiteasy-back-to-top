export { default as attributes_v1_0_1 } from './attributes.json';
export { default as supports_v1_0_1 } from './supports.json';

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export const Save_v1_0_1 = ( {
	attributes: {
		smoothScroll,
		opacity,
		position,
		transitionDuration,
		enableOnDesktop,
		breakPointMobileDesktop,
	},
} ) => (
	<div
		{ ...useInnerBlocksProps.save(
			useBlockProps.save( {
				id: 'makeiteasy-back-to-top',
				'data-smooth-scroll': smoothScroll,
				'data-enable-on-desktop': enableOnDesktop,
				'data-break-point-mobile-desktop': breakPointMobileDesktop,
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
