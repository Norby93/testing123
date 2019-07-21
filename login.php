<?php

session_start();
//printf($_SESSION['id']);
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
		$checkarray += ['uspeh' => 'no'];
	}
	else {
		$checkarray += ['uspeh' => 'yes'];
	}
}
$email    = preg_replace('/[^0-9a-zA-Zа-яА-Я@_.]/', '', neutralization_string($_POST['formEnterEmail']));
$password = preg_replace('/[^a-zA-Z0-9_]/', '', neutralization_string($_POST['formEnterPassword']));

$salt1 = "SGjdfg";
$salt2 = "jkJkJH";

if ($checkarray['uspeh'] == 'no') {
	echo json_encode($returnarray = ['uspeh2' => 'no']);
}

if ($checkarray['uspeh'] == 'yes') {
	$query  = "select password from members WHERE email='$email'";
	$result = $mysqli->query($query);
	$row    = $result->fetch_row();
	if ($row[0] != $password) {
		echo json_encode($returnarray = ['uspeh2' => 'no']);
	}
	else {
		//если вход успешен устанавливаем куки

		setcookie('email',$email,time()+60*60*24*30,'/');
		echo json_encode($returnarray = ['uspeh1' => 'yes']);

	}
}

function neutralization_string($string) {
	$string_neutralized = stripcslashes($string);
	$string_neutralized = htmlentities($string_neutralized);
	$string_neutralized = strip_tags($string_neutralized);
	return $string_neutralized;
}

