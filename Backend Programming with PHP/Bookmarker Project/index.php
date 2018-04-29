<?php
// Start Session
session_start();

if(isset($_POST['name'])){
	if(isset($_SESSION['bookmarks'])){
		$_SESSION['bookmarks'][$_POST['name']] = $_POST['url'];
	} else {
		$_SESSION['bookmarks'] =  Array($_POST['name'] => $_POST['url']);
	}
}

if(isset($_GET['action']) && $_GET['action'] == 'clear'){
	session_unset(); 
	session_destroy(); 
	header("Location: index.php");
}

if(isset($_GET['action']) && $_GET['action'] == 'delete'){
	echo $_GET['name'];
	unset($_SESSION['bookmarks'][$_GET['name']]);
	header("Location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Sessions - PHP</title>
	<link rel="stylesheet" href="http://bootswatch.com/cyborg/bootstrap.min.css">
	<style>
		.delete{color:white;}
	</style>
</head>
<body>
<nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Bookmarker</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="index.php">Home</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="index.php?action=clear">Clear All</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

<div class="container">
	<div class="row">
		<div class="col-md-7">
			<form class="well" method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
				<div class="form-group">
				<label>Website Name: </label>
				<input class="form-control" type="text" name="name">
				</div>
				<div class="form-group">
				<label>Website URL: </label>
				<input class="form-control" type="text" name="url">
				</div>
				<input class="btn btn-default" type="submit" value="submit">
			</form>
		</div>
		<div class="col-md-5">
			<?php if(isset($_SESSION['bookmarks'])): ?>
				<ul class="list-group">
					<?php foreach($_SESSION['bookmarks'] as $name => $url) : ?>
						<li class="list-group-item"><a href="<?php echo $url; ?>"><?php echo $name; ?></a> <a class="delete" href="index.php?action=delete&name=<?php echo $name; ?>">[X]</a></li>
					<?php endforeach; ?>
				</ul>
			<?php else : ?>
				<p>No Bookmarks</p>
			<?php endif; ?>
		</div>
	</div>
</div>
</body>
</html>