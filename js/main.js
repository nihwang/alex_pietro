jQuery(document).ready(function($) {
	$('#mygallery').justifiedGallery({
		rowHeight: 175,
		maxRowHeight: '200%',
		// lastRow: 'nojustify',
		margins: 10,
		randomize: true
	});
});

var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.sticky-header' ),
		didScroll = false,
		changeHeaderOn = 150;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			header.classList.add('sticky-header-shrink');
		}
		else {
			header.classList.remove('sticky-header-shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();




