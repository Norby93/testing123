<?php
require_once 'logintobase.php';

$mysqli = new mysqli('localhost', 'root', 'master', 'momsitedatabase');
if ($mysqli->connect_error) {
	// код для возвращения таблички с ошибкой по причине сбоя работы бд или сервера
	exit($mysqli->connect_error);
}
$email='asdg@adfg.dfgdf';
echo  $email;
$query="select member_login from members_data NATURAL JOIN members WHERE email='$email'";
$row=$mysqli->query($query);
if ($mysqli->error){
	echo $mysqli->error;
}
print_r($row);
$result=$row->fetch_row();
print_r($result);
$login=$result[0];
echo($login);