$( function () {
	$( '#menu-buttons-ul' ).on( 'click', function (event) {
		switch ( event.target.id ) {
			case 'top-menu-main': {
				window.location.href = 'kudato1';
			}
				break;
			case 'top-menu-print': {
				window.location.href = 'kudato2';
			}
				break;
			case 'top-menu-design': {
				window.location.href = 'kudato3';
			}
				break;
			case 'top-menu-maket-rules': {
				window.location.href = 'kudato4';
			}
				break;
			case 'top-menu-FAQ': {
				window.location.href = 'kudato5';
			}
				break;
			case 'top-menu-something': {
				window.location.href = 'kudato6';
			}
				break;
			case 'top-menu-contacts': {
				window.location.href = 'kudato7';
			}
				break;
		}
	} );
} );

// //функция для определения ид элеменна на странице
// $( function () {
// 	$( document ).on( 'mouseover', function (event) {
// 		console.log( event.target.id );
// 	} );
// } );
