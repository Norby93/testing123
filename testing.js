class menuButtons {  //класс для первого выпадающего списка 1го уровня
	constructor(id) {
		this.elementId = id;
	}

	onMouseHover() {
		var idOfTheElement = '#' + this.elementId;

		$( idOfTheElement ).on( 'mouseover', function (event) {
			if ( event.target.id == $( idOfTheElement ).children().attr( 'id' )
			     || event.target.id == $( idOfTheElement ).attr( 'id' ) ) {
				$( idOfTheElement ).children().next().css( 'display', 'flex' );
			}
		} );

		$( idOfTheElement ).on( 'mouseout', function (event) {
			if ( event.relatedTarget.id != $( idOfTheElement ).children().attr( 'id' ) ) {
				$( idOfTheElement ).children().next().css( 'display', 'none' );
			}
		} );
	}
}

menuPrint = new menuButtons( 'top-menu-print' ); //обьект выпадающего списка первого уровня
$( function () {
	menuPrint.onMouseHover();
	console.log( menuPrint.elementId );
} );
menuDesign = new menuButtons( 'top-menu-design' ); //обьект выпадающего списка первого уровня
$( function () {
	menuDesign.onMouseHover();
	console.log( menuDesign.elementId );
} );


class sublist { //класс выпадающего списка второго уровня
	constructor(id) {
		this.elementid = id;
	}

	onMouseHover() {
		var idOfTheElement = '#' + this.elementid;
		$( idOfTheElement ).on( 'mouseover', function () {
			$( idOfTheElement ).parent().css( 'display', 'flex' );
			$( '.top-menu-sublist-li' ).each( function () {
				if ( $( idOfTheElement ).children().attr( 'id' ) ) {
					$( idOfTheElement ).children().css( 'display', 'flex' );
				}
				else {
					console.log( '123' );
				}
			} );
		} );
	}
}

//далее создаем обьекты класса подменю
// обьекты для сабменю печать
createObjectSubMenu( 'businessCards', 'top-menu-print-sublist-li-1' );
createObjectSubMenu( 'blanks', 'top-menu-print-sublist-li-2' );
createObjectSubMenu( 'notebooks', 'top-menu-print-sublist-li-3' );
createObjectSubMenu( 'brochures', 'top-menu-print-sublist-li-4' );
createObjectSubMenu( 'booklets', 'top-menu-print-sublist-li-5' );
createObjectSubMenu( 'wobblers', 'top-menu-print-sublist-li-6' );
createObjectSubMenu( 'certificates', 'top-menu-print-sublist-li-7' );
createObjectSubMenu( 'envelopes', 'top-menu-print-sublist-li-8' );
createObjectSubMenu( 'leafletsAndFlyers', 'top-menu-print-sublist-li-9' );
createObjectSubMenu( 'postcards', 'top-menu-print-sublist-li-10' );

// обьекты для сабменю дизайн
createObjectSubMenu( 'designOfBusinessCards', 'top-menu-design-sublist-li-1' );
createObjectSubMenu( 'corporateStyle', 'top-menu-design-sublist-li-2' );
createObjectSubMenu( 'desognOfLogo', 'top-menu-design-sublist-li-3' );
createObjectSubMenu( 'layoutOfBrochures ', 'top-menu-design-sublist-li-4' );
createObjectSubMenu( 'designOfplate', 'top-menu-design-sublist-li-5' );
createObjectSubMenu( 'designOfBanners', 'top-menu-design-sublist-li-6' );

function createObjectSubMenu(nameOfObject, id) {
	nameOfObject = new sublist( id );
	$( function () {
		nameOfObject.onMouseHover();
	} );
}

$( function () {
	$( '#formEnter' ).on( 'submit', function (event) {
		$.ajax( (
			        {
				        type:    'POST',
				        url:     'login.php',
				        data:    $( '#formEnter' ).serialize(),
				        success: function (datafromserverenter) {
					        let data = JSON.parse( datafromserverenter );
					        if ( data.uspeh1 == 'yes' ) {
						        $( '#formEnterDivDiv' ).text( 'Dobro Pojalovat' );
					        }
					        if ( data.uspeh2 == 'no' ) {
						        $( '#failLogin' ).text( 'fail login or pass' );
					        }

				        }
			        }
		        ) );

	} );
	return false;
} );
