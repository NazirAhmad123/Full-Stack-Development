<?php

$cookie_name = "username";
$cookie_val = "devuser";

setcookie($cookie_name, $cookie_val, time()+3600);
?>
<!DOCTYPE html>
<html>
<head>
	<title>Cookies - PHP</title>
</head>
<body>
<?php
	if(!isset($_COOKIE[$cookie_name])){
		echo 'Cookie - '.$cookie_name.' is not set';
	} else {
		echo 'Cookie - '.$cookie_name.' is set<br>';
		echo 'Cookie Value - '.$cookie_val;
	}
?>
</body>
</html>