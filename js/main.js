jQuery(document).ready(function($) {
	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			$('.nav-bar').addClass('fix-top');
		}
		else {
			$('.nav-bar').removeClass('fix-top');
		}
	});

	$('#mygallery').justifiedGallery({
		rowHeight: 175,
		maxRowHeight: '200%',
		// lastRow: 'nojustify',
		margins: 10,
		randomize: true
	});
});