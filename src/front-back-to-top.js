/**
 * what happens on scroll, set back to top button
 */
'use strict';

let backToTopButton,
	// @param true or false
	backToTopVisible,
	breakPointMobileDesktop,
	observer,
	isVisible,
	lastScrollPosition,
	isGoToBottom;

/**
 * throttle function with additional last call
 *
 * @param {Function} callback
 * @return {Function} - debounced function
 */
const throttleWithAfterCall = ( callback ) => {
	let timeoutId = null;
	return ( ...args ) => {
		if ( timeoutId === null ) {
			// enable this for immediate call and aftercall
			// callback( ...args );
			timeoutId = setTimeout( () => {
				callback( ...args );
				timeoutId = null;
			}, 150 );
		}
	};
};

/**
 * Appear back to top upon scrolling half of screen height
 * Reverse it (go to bottom) if option is enabled
 * Change button to up if it is scrolled to bottom of page
 */
function onScrollFn() {
	const positiveToTrue = ( arg ) => Math.sign( arg ) >= 0 ? true : false;

	const pxScreenHeight = window.innerHeight;
	const token = 'makeiteasy-back-to-top-visible';

	const scrollPosition = window.scrollY;
	if (
		( scrollPosition > pxScreenHeight / 2 && ! backToTopVisible ) ||
			( scrollPosition < pxScreenHeight / 2 && backToTopVisible )
	)
		backToTopVisible = backToTopButton.classList.toggle( token );

	// subtract 10 px to account for possible rounding of pixels
	const isAtBottomOfScreen = document.documentElement.clientHeight + ( document.documentElement.scrollTop || document.body.scrollTop ) >= document.documentElement.scrollHeight - 10;
	if ( isGoToBottom ) {
		const scrollDifference = scrollPosition - lastScrollPosition;

		// only act if user has scrolled a little or at bottom
		if ( Math.abs( scrollDifference ) > 20 || isAtBottomOfScreen ) {
			const orientationDown = positiveToTrue( scrollDifference ) && ! isAtBottomOfScreen;
			// add orientation property to button in order not to lose it
			if ( backToTopButton.orientationDown !== orientationDown ) {
				backToTopButton.orientationDown = orientationDown;
				// add makeiteasy-back-to-top-down class if scrolling is down
				backToTopButton.classList.toggle( 'makeiteasy-back-to-top-down', orientationDown );
			}
		}
		lastScrollPosition = scrollPosition;
	}
}

function initialize() {
	backToTopButton = document.querySelector( '#makeiteasy-back-to-top' );
	isGoToBottom = backToTopButton.dataset.goToBottom === 'true';
	backToTopVisible = false;
	onScrollFn();
	window.addEventListener( 'scroll', throttleWithAfterCall( onScrollFn ) );
	backToTopButton.addEventListener( 'click', () => {
		if ( backToTopButton.orientationDown )
			window.scrollTo( 0, document.body.scrollHeight );
		else
			window.scroll( 0, 0 );
	} );
	//  set smooth scroll
	if ( backToTopButton.dataset.smoothScroll === 'true' )
		document.documentElement.style.scrollBehavior = 'smooth';
	if ( backToTopButton.dataset.enableOnDesktop === 'false' ) {
		breakPointMobileDesktop =
			backToTopButton.dataset.breakPointMobileDesktop;
		isVisible = true;
		observer = new ResizeObserver( updateResponsiveVisibility );
		observer.observe( document.body );
	}
}

if (
	document.readyState === 'complete' || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
	document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
)
	initialize();
// DOMContentLoaded has not fired yet, delay callback until then.
else document.addEventListener( 'DOMContentLoaded', initialize );

function updateResponsiveVisibility( entries ) {
	const screenWidth = entries[ 0 ].contentRect.width;
	if ( screenWidth >= breakPointMobileDesktop && isVisible ) {
		backToTopButton.style.display = 'none';
		isVisible = false;
	}
	if ( screenWidth < breakPointMobileDesktop && ! isVisible ) {
		backToTopButton.style.display = 'block';
		isVisible = true;
	}
}
