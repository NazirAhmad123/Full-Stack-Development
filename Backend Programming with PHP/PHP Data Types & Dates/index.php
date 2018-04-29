<?php
/*
// String
$myStr = 'Hello World';
var_dump($myStr);

// Integer
$myInt = -55;
var_dump($myInt);

// Float
$myFloat = 4.4;
var_dump($myFloat);

// Boolean
$myBool = false;
var_dump($myBool);

// Array
$myArr = [3,3,4,5,6];
var_dump($myArr);

// Null
$myNull = null;
var_dump($myNull);
*/

//$myStr = 'Hello World';

//echo strlen($myStr);
//echo str_word_count($myStr);
//echo strrev($myStr);
//echo strpos($myStr, 'World');
//echo str_replace('World', 'Brad', $myStr);

//echo max(33,2,66,5554,777,3844);
//echo min(33,2,66,5554,777,3844);
//echo abs(-5);
//echo floor(4.7);
//echo ceil(4.7);
//echo rand(10, 30);

echo "The date is ". date('Y/m/d') . '<br>';
echo "The date is ". date('Y.m.d') . '<br>';
echo "The date is ". date('Y-m-d') . '<br>';
echo "The day is ". date('l') . '<br>';
echo "The month is ". date('M') . '<br>';
echo "The year is ". date('Y') . '<br>';
echo "The time is ". date('h:i:sa') . '<br>';

// Set Timezone
date_default_timezone_set("America/New_York");
echo "The time is ". date('h:i:sa') . '<br>';

$d = strtotime("tomorrow");
echo "The date is ". date('Y-m-d', $d) . '<br>';