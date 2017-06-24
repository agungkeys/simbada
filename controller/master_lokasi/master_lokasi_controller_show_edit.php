<?php
	require '../../engine/db_config.php';
	$id  = $_POST["kdLokasi"];
	$sql = "SELECT * FROM masterlokasi WHERE KodeLokasi = '".$id."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>