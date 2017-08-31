<?php
	require '../../../engine/db_config.php';
	$value  = $_POST["val"];
	$sql = "SELECT * FROM masterlokasi WHERE KodeLokasi = '".$value."'";
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
  	echo json_encode($data);
?>