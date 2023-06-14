/**
 * Parent block for cover-hover blocks
 */

import "./editor.scss";

// Components
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	PanelRow,
	ToggleControl,
	RangeControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import initialImage from "./block-assets/keyboard_arrow_up.svg";

// @see https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/panel#panelbody

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export const Edit = ({
	attributes: {
		smoothScroll,
		opacity,
		position,
		transitionDuration,
		enableOnDesktop,
		breakPointMobileDesktop,
	},
	setAttributes,
}) => (
	<>
		<InspectorControls>
			<PanelBody title={__("Page smooth scrolling", "makeiteasy-back-to-top")}>
				<PanelRow>
					<ToggleControl
						label={__("Enable smooth scrolling", "makeiteasy-back-to-top")}
						checked={smoothScroll}
						onChange={(checked) => setAttributes({ smoothScroll: checked })}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__("Desktop/mobile", "makeiteasy-back-to-top")}>
				<PanelRow>
					<ToggleControl
						label={__("Enable on desktop", "makeiteasy-back-to-top")}
						checked={enableOnDesktop}
						onChange={(enableOnDesktop) => setAttributes({ enableOnDesktop })}
					/>
				</PanelRow>
				<PanelRow>
					<UnitControl
						onChange={(breakPointMobileDesktop) =>
							setAttributes({ breakPointMobileDesktop })
						}
						value={breakPointMobileDesktop}
						label={__(
							"Breakpoint value",
							"makeiteasy-back-to-top"
						)}
						size="small"
						className="makeiteasy-btt-breakpoint"
						disabled={enableOnDesktop}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__("Opacity", "makeiteasy-back-to-top")}>
				<PanelRow>
					<RangeControl
						help="Take care of the contrast with the background. Mind the accessibility."
						initialPosition={0.7}
						label={__("Select opacity", "makeiteasy-back-to-top")}
						max={1}
						min={0}
						step={0.01}
						value={opacity}
						onChange={(opacity) => setAttributes({ opacity })}
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title={__("Transition", "makeiteasy-back-to-top")}>
				<PanelRow>
					<UnitControl
						onChange={(transitionDuration) =>
							setAttributes({ transitionDuration })
						}
						value={transitionDuration}
						label={__("Duration", "makeiteasy-back-to-top")}
						units={[
							{ value: "s", label: "s", default: 0.3 },
							{ value: "ms", label: "ms", default: 300 },
						]}
						isResetValueOnUnitChange={true}
						className="makeiteasy-shorter-input-box"
						title="How long does it take for block to appear"
						help="Appearance duration"
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody title="Position">
				<PanelRow>
					<UnitControl
						onChange={(x) => setAttributes({ position: { ...position, x } })}
						value={position.x}
						label={__(
							"from right",
							"makeiteasy-back-to-top"
						)}
						className="makeiteasy-shorter-input-box"
					/>
				</PanelRow>
				<PanelRow>
					<UnitControl
						onChange={(y) => setAttributes({ position: { ...position, y } })}
						value={position.y}
						label={__(
							"from bottom",
							"makeiteasy-back-to-top"
						)}
						className="makeiteasy-shorter-input-box"
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
		<div
			{...useInnerBlocksProps(
				useBlockProps({
					id: "makeiteasy-back-to-top",
					style: {
						"--makeiteasy-back-to-top-opacity": opacity,
						"--makeiteasy-back-to-top-visibility-transition-duration":
							transitionDuration,
						"--makeiteasy-back-to-top-right": position.x,
						"--makeiteasy-back-to-top-bottom": position.y,
					},
				}),
				{
					template: [
						[
							"core/button",
							{
								text: `<img src="${initialImage}" alt=${__(
									"Back to top arrow",
									"makeiteasy-back-to-top"
								)} alt="" width="24" height="24">`,
								ariaLabel: __("Back to top", "makeiteasy-back-to-top"),
								style: {
									spacing: {
										padding: {
											top: "12px",
											right: "12px",
											bottom: "12px",
											left: "12px",
										},
									},
									border: { radius: "9px" },
								},
							},
						],
					],
				}
			)}
		/>
	</>
);

export const Save = ({
	attributes: {
		smoothScroll,
		opacity,
		position,
		transitionDuration,
		enableOnDesktop,
		breakPointMobileDesktop
	},
}) => (
	<div
		{...useInnerBlocksProps.save(
			useBlockProps.save({
				id: "makeiteasy-back-to-top",
				"data-smooth-scroll": smoothScroll,
				"data-enable-on-desktop": enableOnDesktop,
				"data-break-point-mobile-desktop": breakPointMobileDesktop,
				style: {
					"--makeiteasy-back-to-top-opacity": opacity.toString(),
					"--makeiteasy-back-to-top-visibility-transition-duration":
						transitionDuration,
					"--makeiteasy-back-to-top-right": position.x,
					"--makeiteasy-back-to-top-bottom": position.y,
				},
			})
		)}
	/>
);
