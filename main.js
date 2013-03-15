/**
 * Ready Functions
 *
 * @author Curt Husting <curthusting@gmail.com> <www.fineline-designstudio.com>
 */
$(function(  )
{
	initReadyEvents();
})

/**
 * Load Functions
 *
 * @author Curt Husting <curthusting@gmail.com> <www.fineline-designstudio.com>
 */
$( window ).on( 'load', function(  )
{
	initLoadEvents()
	setColumns();
	offsetContent();
})

/**
 * Resize Functions
 *
 * @author Curt Husting <curthusting@gmail.com> <www.fineline-designstudio.com>
 */
$(window).on( 'resize', function(  )
{
	initResizeEvents();
	setColumns();
})


function initReadyEvents() {
	 $('#content-container').isotope({
	 	itemSelector	:	'.block',
	 	columnWidth		:	5,
	   animationOptions: {
	     duration: 750,
	     easing: 'linear',
	     queue: true
	   }
	 });

}

function initLoadEvents() {
	initClickEvents();
	initScrollEvents();

}

function initResizeEvents() {
	checkDisplay();
	offsetContent();

}

function initClickEvents() {
	$('ul.nav a').on('click',function(event)
	{
		smooth_scroll( $(this) );
	});

}

function initScrollEvents() {
	$('body').addClass('scrollspy').scrollspy({ target : '#top-navbar', offset : 0 });
}

function initScrollspy( elem )
{
	elem.scrollspy();
}

/**
 * Sets the grid container width based on available screen size
 *
 * @const displayW = $( window ).width();
 * @const applied classes = four-col three-col two-col one-col
 * @author Curt Husting <curthusting@gmail.com> <www.fineline-designstudio.com>
 */

function setColumns(  )
{
	var displayW	=	$( window ).width(  );
	var container	=	'body';

	if ( displayW >= 1330 )
	{
		$( container ).removeClass( 'three-col two-col one-col' );
		$( container ).addClass( 'four-col' );
	}
	else
	if ( displayW >= 1000 )
	{
		$( container ).removeClass( 'four-col two-col one-col' );
		$( container ).addClass( 'three-col' );
	}
	else
	if ( displayW >= 670 )
	{
		$( container ).removeClass( 'four-col three-col one-col' );
		$( container ).addClass( 'two-col' );
	}
	else
	{
		$( container ).removeClass( 'four-col three-col two-col' );
		$( container ).addClass( 'one-col' );
	}
}

function offsetContent()
{
	var offsetT = $( '.navbar-fixed-top' ).height();
	var offsetB = $( '.navbar-fixed-bottom' ).height();

	$( '#content-container' ).css({
		marginTop			: offsetT,
		marginBottom	: offsetB
	});

}

function loadMore( url, container )
{

	$.ajax({
		url: url,
	}).done( function ( data ) {
		container.append( data );

	});
}

function smoothScroll( elem )
{
	var $anchor = elem;

	$( 'html, body' ).stop().animate({
		scrollTop: $( $anchor.attr( 'href' ) ).css( 'top' )
	}, 1500,'easeInOutExpo' );

}

function scrollspyRefresh( elem ) {
	 if (!elem)
	 {
		$('.scrollspy').each(function () {
			var $spy = $(this).scrollspy('refresh')
		});
	 }
	 else
	 {
	 	var $spy = $(elem).scrollspy('refresh');
	 }

}