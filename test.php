<?php
include_once 'functions.php';
require_once 'functions.php';
//$real=include_once 'functions.php' ? 'yea' : 'Nicht';
echo $real;
$author = "Scott Adams";
$out = <<<_EN
Normal people believe that if it ain't broke, don't fix it.
Engineers believe that if it ain't broke, it doesn't have enough
features yet.
- $author.
_EN;
echo $out,$author;
echo "<br>Это строка " . __LINE__ . " в файле " . __FILE__;
$b ? print "TRUE" : print "FALSE";
echo date("l F jS Y").'  '.date(time());

$a= "<br>".htmlspecialchars("<>",ENT_QUOTES);
echo $a;
$new = "<br>".htmlspecialchars("<a href='test'>Test</a>", ENT_QUOTES);
echo $new; // &lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;

$a = 1;
$b = 0;
echo ($a AND $b) . "<br>";
echo ($a or $b) . "<br>";
echo ($a XOR $b) . "<br>";
echo !$a . "<br>";
$page = "Ne1ws";
$g = "Home";
$j = "About";
$k = "News";
$l = "Login";
$h = "Links";

switch ($page) {
 case $g:
  echo "Вы выбрали Home";
  break;
 case "$j":
  echo "Вы выбрали About";
  break;
 case $h:
  echo "Вы выбрали News";
  break;
 case $k:
  echo "Вы выбрали Login";
  break;
 case $l:
  echo "Вы выбрали Links";
 default: echo "Нераспознанный выбор";
  break;
}
$saved =7;
$new =7;
echo $saved = $saved >= $new ? $saved : $new . "<br>"; //??????????????????????????? pochemu ne rabotaet
echo "<br>";
$count = 0;
while (++$count <= 12)
 echo "Число $count, умноженное на 12, равно " . $count * 12 . "<br>";
for ($i = 0; $i < 5; ++$i) {
 if ($i == 2)
  continue;
  print "$i\n";
}
$a = (array)('sdfsfsf');
echo $a[0];
echo "<br>";
$lowered = 'HjdjkfgJjsgjs xdfgfJs dgK kdsfkL    ';
echo probazovanie_2($lowered);
function probazovanie_2($a)
{
 $b = strtolower($a);
 return ucfirst($b)."<br>".$b;
}
echo "<br>";
$a1 = "WILLIAM";
$a2 = "henry";
$a3 = "gatES";
fix_names($a1, $a2, $a3);
echo "$a1" . "$a2"."$a3";

echo function_exists("array_combine") ? "yes" : "np";

$a=str_split(phpversion(),4);
echo "$a[0]";
echo "<br>";

$temp = new User();
$temp->name = "a";
$temp->password = "b";
class User{
 public $name, $password;
}
print_r ($temp);

Translate::lookup();
class Translate
{
 const ENGLISH = 0;
 const SPANISH = 1;
 const FRENCH = 2;
 const GERMAN = 3;
// ...
 Static function lookup()
{
echo self::SPANISH;
}
}
class MyClass
{
 const CONSTANT = 'значение константы';

 function showConstant() {
  echo  self::CONSTANT . "<br>";
 }
}

echo MyClass::CONSTANT . "<br>";

//$classname = "MyClass";
//echo $classname::CONSTANT . "<br>"; // начиная с PHP 5.3.0

$class = new MyClass();
$class->showConstant();

echo $class::CONSTANT."<br>"; // начиная с PHP 5.3.0
$products = array(
    'paper' => array(
        'copier' => "Copier & Multipurpose",
        'inkjet' => "Inkjet Printer",
        'laser' => "Laser Printer",
        'photo' => "Photographic Paper"),
    'pens' => array(
        'ball' => "Ball Point",
        'hilite' => "Highlighters",
        'marker' => "Markers"),
    'misc' => array(
        'tape' => "Sticky Tape",
        'glue' => "Adhesives",
        'clips' => "Paperclips"
    )
);
echo "<pre>";
foreach ($products as $section => $items)
 foreach ($items as $key => $value)
  echo "$section:\t$key\t($value)<br>";
echo "</pre>";
echo count($products, 0);
//printf("<span color='#%X%X%X'>Привет</span>", 65, 127, 245);
printf("Результат: $%.2f", 123.42 / 12);
$fh = fopen("testfile.txt", 'w') or die("Создать файл не удалось");
$text = <<<_END
Строка 1
Строка 2
Строка 3
_END;
fwrite($fh, $text) or die("Сбой записи файла");
fclose($fh);
echo "Файл 'testfile.txt' записан успешно ";

$cmd = "dir"; // Windows
// $cmd = "ls"; // Linux, UNIX & Mac
exec(escapeshellcmd($cmd), $output, $status);
if ($status) echo "Команда exec не выполнена";
else
{
 echo "<pre>";
 foreach($output as $line) echo htmlspecialchars("$line\n");
 echo "</pre>";
}
 if (preg_match("/php/", "PHP is the web scripting language of choice.")) {
  echo "Вхождение найдено.";
 } else {
  echo "Вхождение не найдено.";
 }
 $field = 'mailbox';
 $default_{$field} = 'abc';
 
 print($default_{$field});
 
 isValidForMyNeeds('#.@#$%^&\'123');
 function isValidForMyNeeds($buffer)
 {
  if (preg_match('/[^a-z0-9.#-\'$]/i', $buffer)) print "Invalid characters found";
 }
 
echo preg_match('/[^A-Za-z0-9]/','#$%^&');
 echo("<br>");
 $a = 1; $b = 0;
//echo(($a && $b). "<br>");
echo(($a || $b) . "<br>");
echo(( !$b ) ."<br>");

?>

