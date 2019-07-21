<?php

session_start();
require_once 'logintobase.php';

$mysqli = new mysqli('localhost', 'root', 'master', 'momsitedatabase');
if ($mysqli->connect_error) {
	// код для возвращения таблички с ошибкой по причине сбоя работы бд или сервера
	exit($mysqli->connect_error);
}

$checkarray = array();

foreach ($_POST as $property => $value) { //проверка на допустимость.
	neutralization_string($_POST[$property]);
	if ($_POST[$property] == '') {
		$checkarray += ['uspeh2' => 'no'];
	}
	else {
		$checkarray += ['uspeh' => 'yes'];
	}
}

if ($checkarray['uspeh2'] == 'no') { // сообщение об ошибке
	echo json_encode($returnarray = array('uspeh2' => 'no'));
}
else {// проверка на регистрацию
	$email          = $_POST['formEmail'];
	$query           = "select * from members WHERE email = '$email'";
	$result          = $mysqli->query($query);
	$email_from_base = $result->fetch_row();
	if ($email == $email_from_base[1]) {
		echo json_encode($returnarray = array('uspeh3' => 'repeat'));
	}
	else {// регистрация если не зарегистрирован
		$email             = preg_replace('/[^0-9a-zA-Zа-яА-Я@_.]/', '', neutralization_string($_POST['formEmail']));
		$password          = preg_replace('/[^a-zA-Z0-9_]/', '', neutralization_string($_POST['formPassword']));
		$salt1             = "SGjdfg";
		$salt2             = "jkJkJH";
		$hash_password     = $salt1.$password.$salt2;
		$id                = random_int(1, 2147683000);
		$members_name      = preg_replace('/[^a-zA-zА-Яа-я]/', '', neutralization_string($_POST['formForename']));
		$members_surname   = preg_replace('/[^a-zA-Zа-яА-Я]/', '', neutralization_string($_POST['formSurname']));
		$members_telephone = preg_replace('/[^0-9]/', '', neutralization_string($_POST['formTelephone']));
		$members_login     = preg_replace('/[^a-zA-Z0-9_]/', '', neutralization_string($_POST['formLogin']));


		$query  = "INSERT INTO members(id,email,password,hash_password)
					VALUES ('$id','$email','$password','$hash_password')";
		$query2 = "INSERT into members_data(id,member_name,member_surname,member_login,member_telephone)
					VALUES ('$id','$members_name','$members_surname','$members_login','$members_telephone')";

		$result  = $mysqli->query($query);
		$result2 = $mysqli->query($query2);

		if ( !$result || !$result2) {
			print_r($mysqli->error);
		}
		echo json_encode($returnarray = ['uspeh' => 'yes']);
//				print_r($returnarray);
		//		mail('latko200@gmail.com', '123', '321');   далее делаем проверку через email
	}
}

function neutralization_string($string) {
	$string_neutralized = stripcslashes($string);
	$string_neutralized = htmlentities($string_neutralized);
	$string_neutralized = strip_tags($string_neutralized);
	return $string_neutralized;
}