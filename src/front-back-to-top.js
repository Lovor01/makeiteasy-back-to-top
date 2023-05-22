/**
 * what happens on scroll, set back to top button
 */
'use strict';

let
	currentlyInScrollThrottle,
	backToTopButton,
	//  @param true or false
	backToTopVisible,
	breakPointMobileDesktop,
	observer,
	isVisible;

function onScrollFn () {
	const pxScreenHeight = window.innerHeight;
	const token = 'makeiteasy-back-to-top-visible';
	if ( !currentlyInScrollThrottle ) {
		if ( ( window.scrollY > pxScreenHeight / 2 && !backToTopVisible ) || ( window.scrollY < pxScreenHeight / 2 && backToTopVisible ) )
			backToTopVisible = backToTopButton.classList.toggle( token );
		currentlyInScrollThrottle = true;
		window.setTimeout( () => { currentlyInScrollThrottle = false; }, 150 );
	}
};

function initialize () {
	currentlyInScrollThrottle = false;
	backToTopButton = document.querySelector( '#makeiteasy-back-to-top' );
	backToTopVisible = false;
	onScrollFn();
	window.addEventListener( 'scroll', onScrollFn );
	backToTopButton.addEventListener( 'click', () => {
		window.scroll( 0, 0 );
	} );
	//  set smooth scroll
	if ( backToTopButton.dataset.smoothScroll === 'true' )
		document.documentElement.style.scrollBehavior = 'smooth';
	if ( backToTopButton.dataset.enableOnDesktop === 'false' ) {
		breakPointMobileDesktop = backToTopButton.dataset.breakPointMobileDesktop;
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
else
	// DOMContentLoaded has not fired yet, delay callback until then.
	document.addEventListener( 'DOMContentLoaded', initialize );

function updateResponsiveVisibility ( entries ) {
	const screenWidth = entries[ 0 ].contentRect.width;
	if ( screenWidth >= breakPointMobileDesktop && isVisible ) {
		backToTopButton.style.display = "none";
		isVisible = false;
	}
	if ( screenWidth < breakPointMobileDesktop && !isVisible ) {
		backToTopButton.style.display = "block";
		isVisible = true;
	}
}