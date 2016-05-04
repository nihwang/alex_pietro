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
		header = document.querySelector( '.cbp-af-header' ),
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
			header.classList.add('cbp-af-header-shrink');
		}
		else {
			header.classList.remove('cbp-af-header-shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();




