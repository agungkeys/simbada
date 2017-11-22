<?php
	require('master_config.php');
	/* Database connection start */
	// $servername = "localhost";
	// $username = "root";
	// $password = "";
	// $dbname = "simbada";

	$conn = mysqli_connect($_DBHOST, $_DBUSERNAME, $_DBPASSWORD, $_DBNAME) or die("Connection failed: " . mysqli_connect_error());

	/* Database connection end */
?>