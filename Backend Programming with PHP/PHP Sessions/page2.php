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
	echo $_SESSION['username'].'s email is '.$_SESSION['email']
?>
</body>
</html>