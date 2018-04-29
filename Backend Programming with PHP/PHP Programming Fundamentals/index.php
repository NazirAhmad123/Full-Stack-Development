<?php
/*
 // CONSTANT
 define('HOSTNAME', 'localhost');
 echo HOSTNAME;

 // VARIABLE
 $user = 'John Doe';
 $num = 5;

 echo $user .' has '.$num.' donuts';

 // ARRAYS
 $users = Array('Mike', 'Jill', 'Jose');
 //$users = ['Mike', 'Jill', 'Jose'];
 //print_r($users);

 $users[3] = 'Tom';

 echo $users[3];

 $ages = Array(
  'Karen' => 34, 
  'Larry' => 44, 
  'Jeff' => 38);

 echo $ages['Larry'];

 // FUNCTIONS
 function writeMsg($msg = 'Hello World'){
  return $msg;
 }

 echo writeMsg('Goodbye');

 // CONDITIONALS
 $num1 = 20;
 $num2 = 10;

 if($num1 >= 20 && $num2 < 5){
    echo 'Yes it is';
 } else {
    echo 'No it is not';
 }

 // LOOPS
 for($i = 0;$i <= 10;$i++){
    echo 'Number '.$i.'<br>';
 }

 $i = 0;
 while($i < 10){
    echo 'Number '.$i.'<br>';
    $i++;
 }
 */
$users = Array('Mike', 'Jill', 'Jose');

foreach($users as $user){
    echo $user.'<br>';
}
