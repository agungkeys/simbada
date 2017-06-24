<?php
	require '../../engine/db_config.php';
	$id  = $_POST["val"];

	$sql = "SELECT * FROM masterpemilik WHERE KodePemilik = '".$id."'";
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
  	echo json_encode($data);
?>