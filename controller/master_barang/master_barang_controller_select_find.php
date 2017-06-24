<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kodeBarang"];
	$sql = "SELECT * FROM masterbarang WHERE KodeBarang = '".$id."'";
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
  	echo json_encode($data);
?>