<?php
// Start Session
session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<title>Sessions - PHP</title>
</head>
<body>
<?php
	// Set Session Vars
	$_SESSION['username'] = 'devuser';
	$_SESSION['email'] = 'devuser@gmail.com';
	echo 'Session vars set';
?>
</body>
</html>