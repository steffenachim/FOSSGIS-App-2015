<?php

	ini_set('display_errors', '1');
	error_reporting(E_ALL | E_STRICT);

	require_once('config.php');
	
	$title = (string)$_GET['title'];
	
	$title = utf8_encode($title);
	echo $title;
	
	$sql1 = "SELECT participants FROM Speech WHERE title LIKE '%".$title."%'";
	
	$participants = mysqli_query($connection, $sql1);
	
	$part = $participants + 1;
	
	$sql = "UPDATE Speech SET participants = '".$part."' WHERE title LIKE '%".$title."%'";
	
	//UPDATE Speech SET participants = '0' WHERE title LIKE 'ErÃ¶ffnung%';
	//SELECT participants FROM Speech WHERE title LIKE 'ErÃ¶ffnung%';
	
	$result = mysqli_query($connection, $sql);
	
	setcookie('title', $user, strtotime("+1 month"));
	
	$cookie = (string)$_COOKIE['title'];
	$list = '$cookie'.','.'§title';
    $_COOKIE['title'] = $list;
	
	//header("Location: ../frontend/index.html");
	exit();

?>

	

	
