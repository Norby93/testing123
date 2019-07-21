$( function () {
	// Owl Carousel
	var owl = $( ".owl-carousel" );
	owl.owlCarousel( {
		                 items:    1,
		                 // margin: 10,
		                 loop:     true,
		                 nav:      true,
		                 autoplay: true
	                 } );
} );

$( function () {
	let email = getCookie( 'email' );
	console.log( email );
	if ( email ) {
		$( '#enter-register-div' ).addClass( 'display-none' );
		$( '#is-user-logged' ).addClass( 'display-flex' );
	}
	else {
		$( '#enter-register-div' ).addClass( 'display-block' );
		$( '#is-user-logged' ).addClass( 'display-none' );
	}
} );

$( function () {
	console.log( document.cookie );
} );

isRegisterLucky = '';

$( function () {
	$( '#formEnterButton' ).on( 'click', function (event) {
		event.preventDefault();
		failEnter = [];
		failEnter.push( checkEmail( $( '#formEnterEmail' ).val() ) );
		failEnter.push( checkPassword( $( '#formEnterPassword' ).val() ) );
		if ( failEnter[0] == '' && failEnter[1] == '' ) {
			$.ajax( (
				        {
					        type:    'POST',
					        url:     'login.php',
					        data:    $( '#formEnter' ).serialize(),
					        success: function (datafromserverenter) {
						        let data = JSON.parse( datafromserverenter );
						        alert( datafromserverenter );
						        if ( data.uspeh1 == 'yes' ) {
							        $( '#formEnter' ).css( 'display', 'none' );
							        $( '#formEnterDivDiv' ).text( 'Dobro Pojalovat' );
							        $( '#formEnterBottomForgotPassword' ).css( 'display', 'none' );
							        isRegisterLucky = 'yes';
						        }
						        if ( data.uspeh2 == 'no' ) {
							        $( '#failLogin' ).text( 'fail login or pass' );
							        $( '#formEnterBottomForgotPasswordA' ).css( 'display', ' inline-block' );
							        $( '#formEnterPassword' ).val( '' );
							        event.preventDefault();
						        }

					        }
				        }
			        ) );
		}
		else {
			$( '#failLogin' ).text( 'fail loginor pass' );
			$( '#formEnterBottomForgotPasswordA' ).css( 'display', ' inline-block' );
			$( '#formEnterPassword' ).val( '' );
		}
	} );
	return false;
} );


$( function () {
	$( '#enter-button' ).on( 'click', function () {
		$( '#formEnterBottomForgotPasswordA' ).css( 'display', 'none' );
		$( '#failLogin' ).text( '' );
		// $( '#formEnter .input' ).val( '' );
		$( '#formEnter' ).css( 'display', 'inline' );

	} );
} );


function getCookie(name) {

	var matches = document.cookie.match( new RegExp(
		"(?:^|; )" + name.replace( /([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1' ) + "=([^;]*)"
	) );
	return matches ? decodeURIComponent( matches[1] ) : undefined;
}