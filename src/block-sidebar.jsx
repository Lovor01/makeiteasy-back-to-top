import { InspectorControls } from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ToggleControl,
	RangeControl,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';


export default ( {
	setAttributes,
	smoothScroll,
	enableOnDesktop,
	breakPointMobileDesktop,
	transitionDuration,
	opacity,
	position,
	goToBottom
} ) => (
	<InspectorControls>
		<PanelBody
			title={ __( 'Page smooth scrolling', 'makeiteasy-back-to-top' ) }
		>
			<PanelRow>
				<ToggleControl
					label={ __(
						'Enable smooth scrolling',
						'makeiteasy-back-to-top'
					) }
					checked={ smoothScroll ?? false }
					onChange={ ( checked ) =>
						setAttributes( { smoothScroll: checked } )
					}
				/>
			</PanelRow>
		</PanelBody>
		<PanelBody title={ __( 'Desktop/mobile', 'makeiteasy-back-to-top' ) }>
			<PanelRow>
				<ToggleControl
					label={ __(
						'Enable on desktop',
						'makeiteasy-back-to-top'
					) }
					checked={ enableOnDesktop ?? true }
					onChange={ ( enableOnDesktop ) =>
						setAttributes( { enableOnDesktop } )
					}
				/>
			</PanelRow>
			<PanelRow>
				<UnitControl
					onChange={ ( breakPointMobileDesktop ) =>
						setAttributes( { breakPointMobileDesktop } )
					}
					value={ breakPointMobileDesktop }
					label={ __( 'Breakpoint value', 'makeiteasy-back-to-top' ) }
					size="small"
					className="makeiteasy-btt-breakpoint"
					disabled={ enableOnDesktop }
				/>
			</PanelRow>
		</PanelBody>
		<PanelBody title={ __( 'Opacity', 'makeiteasy-back-to-top' ) }>
			<PanelRow>
				<RangeControl
					help="Take care of the contrast with the background. Mind the accessibility."
					initialPosition={ 0.7 }
					label={ __( 'Select opacity', 'makeiteasy-back-to-top' ) }
					max={ 1 }
					min={ 0 }
					step={ 0.01 }
					value={ opacity }
					onChange={ ( opacity ) => setAttributes( { opacity } ) }
				/>
			</PanelRow>
		</PanelBody>
		<PanelBody title={ __( 'Transition', 'makeiteasy-back-to-top' ) }>
			<PanelRow>
				<UnitControl
					onChange={ ( transitionDuration ) =>
						setAttributes( { transitionDuration } )
					}
					value={ transitionDuration }
					label={ __( 'Duration', 'makeiteasy-back-to-top' ) }
					units={ [
						{ value: 's', label: 's', default: 0.3 },
						{ value: 'ms', label: 'ms', default: 300 },
					] }
					isResetValueOnUnitChange={ true }
					className="makeiteasy-shorter-input-box"
					title="How long does it take for block to appear"
					help="Appearance duration"
				/>
			</PanelRow>
		</PanelBody>
		<PanelBody title="Position">
			<PanelRow>
				<UnitControl
					onChange={ ( x ) =>
						setAttributes( { position: { ...position, x } } )
					}
					value={ position.x }
					label={ __( 'from right', 'makeiteasy-back-to-top' ) }
					className="makeiteasy-shorter-input-box"
				/>
			</PanelRow>
			<PanelRow>
				<UnitControl
					onChange={ ( y ) =>
						setAttributes( { position: { ...position, y } } )
					}
					value={ position.y }
					label={ __( 'from bottom', 'makeiteasy-back-to-top' ) }
					className="makeiteasy-shorter-input-box"
				/>
			</PanelRow>
		</PanelBody>
		<PanelBody title="Go to bottom">
			<PanelRow>
				<ToggleControl
						label={ __(
							'Go to bottom function',
							'makeiteasy-back-to-top'
						) }
						checked={ goToBottom ?? false }
						onChange={ ( checked ) =>
							setAttributes( { goToBottom: checked } )
						}
					/>
			</PanelRow>
		</PanelBody>
	</InspectorControls>
);
