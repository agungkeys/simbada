<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kodeUserName"];
	$sql = "SELECT * FROM user WHERE user_name = '".$id."'";
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
  	echo json_encode($data);
?>