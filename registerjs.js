//скрываем или показываем форму
$( document ).ready( function () {
	$( '#enter-button' ).on( 'click', function () {
		showRegisterForm( 'flex', 'formEnterDiv', 'register-fon-full' );
	} );
} );
$( document ).ready( function () {
	$( '#reg-button' ).on( 'click', function () {
		showRegisterForm( 'block', 'register-fon', 'register-fon-full' );
	} );
} );
$( document ).ready( function () {
	$( '.closeImg' ).on( 'click', function () {
		if ( isRegisterLucky == 'yes' ) {
			isRegisterLucky = '';
			location.reload( true );
		}
		else {
			showRegisterForm( 'none', 'register-fon', 'formEnterDiv', 'regSuccessOrFail', 'register-fon-full' );
		}
	} );
} );
$( document ).ready( function () {
	$( '#register-fon-full' ).on( 'click', function () {
		if ( isRegisterLucky == 'yes' ) {
			isRegisterLucky = '';
			location.reload( true );
		}
		else {
			showRegisterForm( 'none', 'register-fon', 'formEnterDiv', 'regSuccessOrFail', 'register-fon-full' );
		}
		S;
	} );
} );
$( function () {
	$( '#formEnterBottomRegisterA' ).on( 'click', function (e) {
		e.preventDefault();
		showRegisterForm( 'block', 'register-fon', 'register-fon-full' );
		showRegisterForm( 'none', 'formEnterDiv', 'regSuccessOrFail' );
	} );
} );

function showRegisterForm(state, elementId1, elementId2, elementId3, elementId4) {

	if ( elementId3 ) {
		document.getElementById( elementId1 ).style.display = state;
		document.getElementById( elementId2 ).style.display = state;
		document.getElementById( elementId3 ).style.display = state;
		document.getElementById( elementId4 ).style.display = state;
	}
	else {

		document.getElementById( elementId1 ).style.display = state;
		document.getElementById( elementId2 ).style.display = state;
	}

	window.onload = function () {
		for ( i = 0; i < $( '#regform :input' ).length - 2; i++ ) {
			document.forms[0].elements[i].style.border = '2px rgba(1,1,1,.2) solid';
			// document.forms[0].elements[i].value = ''; // убраем значения в полях если закрывалась форма
			$( '.labelform' ).text( '' );
		}

	};
}

// проверка вводимых пользователем данных
function validate(registerform) {

	countFilledFields = 0;
	confirmFails = '';

	fail1 = [];

	fail1.push( checkForename( registerform.formForename.value ) );
	fail1.push( checkSurname( registerform.formSurname.value ) );
	fail1.push( checkTelephone( registerform.formTelephone.value ) );
	fail1.push( checkEmail( registerform.formEmail.value ) );
	fail1.push( checklogin( registerform.formLogin.value ) );
	fail1.push( checkPassword( registerform.formPassword.value ) );
	fail1.push( checkConfirmPassword( registerform.formConfirmPassword.value ) );
	alert( document.cookie );
	for ( i = 0; i < fail1.length; i++ ) {
		(confirmFails += fail1[i]);
		returnMessages( i, fail1[i] );
	}

	if ( confirmFails == '' ) {
		$.ajax( (
			        {
				        type:    'POST',
				        url:     'register.php',
				        data:    $( '#regform' ).serialize(),
				        success: function (datafromserver) {
					        $( "#register-fon" ).css( 'display', 'none' );
					        $( '#regSuccessOrFail' ).css( 'display', 'flex' );
					        alert( datafromserver );
					        var data = JSON.parse( datafromserver );

					        if ( data.uspeh == 'yes' ) {
						        $( '#yesorno' ).text( 'yes' );
						        $( '#linkToPersonalAreaOrToAdmin' ).attr( 'href', 'http://google.ua' );
						        $( '#linkToPersonalAreaOrToAdmin' ).text( 'в личный кабинет' );

					        }
					        else {
						        if ( data.uspeh2 == 'no' ) {
							        $( '#yesorno' ).text( 'no' );
							        $( '#linkToPersonalAreaOrToAdmin' ).attr( 'href', 'http://google.ru' );
							        $( '#linkToPersonalAreaOrToAdmin' ).text( 'сообщить админу' );

						        }
						        else {
							        if ( data.uspeh3 == 'repeat' ) {
								        $( '#yesorno' ).text( 'вы уже зарегистрированы здесь' );
								        $( '#linkToPersonalAreaOrToAdmin' ).attr( 'href', 'http://facebook.com' );
								        $( '#linkToPersonalAreaOrToAdmin' ).text( 'забыли пароль?' );
							        }
							        else {
								        $( '#yesorno' ).text( 'huinya' );
								        $( '#returnToPersonalAreaOrToAdmin' ).text( 'huinya' );
							        }
						        }
					        }
				        }
			        }
		        ) );
		alert( 'gc' );
		return false;
	}
	else {
		alert( confirmFails );
		return false;
	}
}

function checkForename(value) { // в следующий раз делаем через case
	if ( value === '' ) {
		return 'пожалуйста введите имя';

	}
	else {
		if ( value.length > 18 ) {
			return 'имя пользователя должно иметь до 18 символов';
		}
		else {
			if ( /[^a-zA-Zа-яА-Я]/.test( value ) ) {
				return 'неверно введено имя';
			}
			else {
				return '';
			}
		}
	}
}

function checkSurname(value) {
	if ( value === '' ) {
		return 'пожалуйста введите фамилию';

	}
	else {
		if ( value.length > 30 ) {
			return 'фамилия должна иметь до 30 символов';
		}
		else {
			if ( /[^a-zA-Zа-яА-Я]/.test( value ) ) {
				return 'нверно введена фамиилия';
			}
			else {
				return '';
			}
		}
	}
}

function checkTelephone(value) {
	if ( value === '' ) {
		return 'пожалуйста, введите номер Вашего телефона';
	}
	else {
		if ( value.length > 30 ) {
			return 'телефон может иметь до 30 символов';
		}
		else {
			if ( /[^0-9\-\(\)]/.test( value ) ) {
				return 'пожалуйста, введите корректный номер телефона';
			}
			else {
				return '';
			}
		}
	}
}

function checkEmail(value) {
	if ( value === '' ) {
		return ' пожалуйста, введите Ваш email';
	}

	else {
		if ( 5 > value.length || value.length > 50 ) {
			return 'email должен содержать от 5 до 50 символов';
		}
		else {
			if ( /[^0-9a-zA-Zа-яА-Я@_.]/.test( value ) ) {
				return ' пожалуйста, введите корректный email';
			}
			else {
				return '';
			}
		}
	}

}

function checklogin(value) {
	if ( value === '' ) {
		return 'пожалуйста введите Ваш логин';
	}

	else {
		if ( 6 > value.length || value.length > 18 ) {
			return 'логин должен содержать от 6 до 18 символов';
		}
		else {
			if ( /[^0-9a-zA-Z_]/.test( value ) ) {
				return 'логин может содержать только цыфры, буквы латинского алфавита и знак _';
			}
			else {
				return '';
			}
		}
	}
}

function checkPassword(value) {
	if ( value === '' ) {
		return 'пожалуста, введите пароль';
	}
	else {
		if ( value.length < 8 ) {
			return 'пароль должен содержать не меньше восьми сиволов и' +
			       ' содержать не менее 1 символа из каждого набора a-z, A-Z и 0-9';
		}
		else {
			if ( !/[a-z]/.test( value ) || !/[A-Z]/.test( value ) || !/[0-9]/.test( value ) ) {
				return 'Пароль требует 1 символа из каждого набора a-z, A-Z и 0-9';
			}
			else {
				if ( /[^a-zA-Z0-9_]/.test( value ) ) {
					return 'недопустимый формат пароля. допустимые символы: a-zA-Z0-9 и знак _';
				}
				else {
					return '';
				}
			}
		}
	}

}

function checkConfirmPassword(value) {
	if ( value === '' ) {
		return ' пожалуйста подствердите пароль';
	}

	else {
		if ( value !== document.getElementById( 'formPassword' ).value ) {
			return 'пароли не совпадают';
		}
		else {
			return '';
		}
	}
}

//заполняем лейблы, если нашли ошибку//обнуляем пароли.
function returnMessages(index, value) {
	if ( value !== '' ) {
		$( document ).ready( function () {
			document.forms[0].elements[index].style.border = '1px solid red'; //красный бордер для форм где фейл
			document.getElementById( index ).textContent = value;  // заполняем лейблы
			document.forms[0].elements[5].value = ''; //сбрасываем пароль
			document.forms[0].elements[6].value = '';
		} );

	}
}