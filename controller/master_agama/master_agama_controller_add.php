<?php
	require '../../engine/db_config.php';

	$post = $_POST;
	$sql = "INSERT INTO lookupagama (
		Agama
	)
	VALUES (
		'".$post['val']."'
	)";
	$result = $mysqli->query($sql);
	$sql = "SELECT * FROM lookupagama WHERE Agama = '".$post['val']."'"; 
	$result = $mysqli->query($sql);
	$data = $result->fetch_assoc();
	echo json_encode($data);
?>