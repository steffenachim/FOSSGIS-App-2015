<?php

	ini_set('display_errors', '1');
	error_reporting(E_ALL | E_STRICT);

	require_once('config.php');
	
	$title = $_GET['title'];
	
	$sql1 = "SELECT participants FROM Speech WHERE title = '".$title."'";
	
	$participants = mysqli_query($connection, $sql1);
	
	$part = $participants + 1;
	
	$sql = "UPDATE Speech SET participants = '".$part."' WHERE title = '".$title."'";
	
	$result = mysqli_query($connection, $sql);
	
	setcookie('title', $user, strtotime("+1 month"));
    $_COOKIE['title'] = $title;
	
	header("Location: index.html");
	exit();

?>

	

	
