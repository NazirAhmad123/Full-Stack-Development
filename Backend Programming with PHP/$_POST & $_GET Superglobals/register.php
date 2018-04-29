<?php
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email = $_POST['email'];
	$location = $_POST['location'];

	if($first_name == '' || $last_name == '' || $email == '' || $location == ''){
		header("Location: index.php?error=Please%20Fill%20In%20All%20Fields");
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>User Profile</title>
	<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
</head>
<body>
<div class="w3-card w3-margin w3-padding">
	<h2>User Profile</h2>
	<h3><?php echo $first_name; ?> <?php echo $last_name; ?></h3>
	<ul>
		<li>Email: <?php echo $email; ?></li>
		<li>Location: <?php echo $location; ?></li>
	</ul>
</div>
</body>
</html>